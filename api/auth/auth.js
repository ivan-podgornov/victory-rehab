import crypto from 'crypto';
import {
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
} from 'graphql';

const mutations = {
    auth: {
        type: new NonNull(StringType),
        args: {
            password: { type: new NonNull(StringType) },
        },
        resolve: (_, { password }, context) => {
            const hashedPassword = crypto.createHmac('sha256', password).digest('hex');
            const oneMoreYear = new Date();
            oneMoreYear.setFullYear(oneMoreYear.getFullYear() + 1);

            if (hashedPassword !== '8a6db7c87a3efeac94ce6be03c378b88d66ffdbb8c08308ed435ec2e56ed9437') {
                return 'FAIL';
            }

            return context.response
                .writeHead(302, 'Found', {
                    'Location': context.request.headers.origin,
                    'Set-Cookie': `token=${hashedPassword}; Expires=${oneMoreYear.toUTCString()}`,
                })
                .end();
        },
    },
};

export default { mutations };