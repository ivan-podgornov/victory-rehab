import Message from './model';
import {
    GraphQLList as List,
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
} from 'graphql';

const query = {
    name: 'Messages',
    type: new List(
        new ObjectType({
            name: 'Message',
            fields: {
                name: { type: StringType },
                phone: { type: StringType },
                text: { type: StringType },
            },
        }),
    ),
    resolve: async () => await Message.find(),
};

const mutations = {
    sendMessage: {
        type: new NonNull(StringType),
        args: {
            name: { type: new NonNull(StringType) },
            phone: { type: new NonNull(StringType) },
            text: { type: new NonNull(StringType) },
        },
        resolve: async (_, args, context) => {
            const result = await Message.send(args);

            if (context.request.headers.accept !== 'application/json') {
                const url = context.request.headers.referer || context.request.headers.host;
                context.response.redirect(url);
                return context.response.end();
            }

            return result;
        },
    },
};

export default { query, mutations };
