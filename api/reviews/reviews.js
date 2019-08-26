import Review from './model';
import Message from '../messages/model';
import {
    GraphQLBoolean as BooleanType,
    GraphQLList as List,
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
} from 'graphql';

const query = {
    name: 'Reviews',
    type: new List(
        new ObjectType({
            name: 'Review',
            fields: {
                id: { type: new NonNull(StringType) },
                name: { type: new NonNull(StringType) },
                text: { type: new NonNull(StringType) },
                approved: { type: BooleanType },
                phone: { type: StringType },
            },
        }),
    ),
    args: {
        token: { type: StringType },
    },
    resolve: async (_, args) => {
        const isAdmin = args.token === '8a6db7c87a3efeac94ce6be03c378b88d66ffdbb8c08308ed435ec2e56ed9437';
        const projections = isAdmin ? '' : '-phone -approved';
        const conditions = isAdmin ? {} : { approved: true };
        const reviews = await Review.find(conditions, projections);
        return reviews;
    },
};

const mutations = {
    approveReview: {
        type: new NonNull(StringType),
        args: {
            token: { type: new NonNull(StringType) },
            id: { type: new NonNull(StringType) },
            ok: { type: new NonNull(BooleanType) },
        },
        resolve: async (_, { token, id, ok }) => {
            const isAdmin = token === '8a6db7c87a3efeac94ce6be03c378b88d66ffdbb8c08308ed435ec2e56ed9437';
            if (!isAdmin) return 'Вы не обладаете правами администратора';
            const review = await Review.findById(id);

            if (ok === true) {
                review.approved = ok;
                await review.save();
                return 'Отзыв подтверждён';
            }

            await review.remove();
            return 'Отзыв удалён';
        },
    },

    createReview: {
        type: new NonNull(StringType),
        args: {
            name: { type: new NonNull(StringType) },
            phone: { type: new NonNull(StringType) },
            text: { type: new NonNull(StringType) },
        },
        resolve: async (_, { name, phone, text }) => {
            await Review.create({ name, phone, text });
            const sms = ''
                + 'Оставил отзыв. Посмотреть можно здесь: https://victory-rehab.ru/reviews . '
                + 'Нужно быть авторизованым как администратор: https://victory-rehab.ru/admin . '
                + 'Пароль: victory228';

            await Message.send({ name, phone, text: sms });
            return 'Спасибо! Отзыв будет добавлен после проверки администратором';
        },
    },
};

export default { query, mutations };
