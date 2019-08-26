import auth from './auth/auth';
import messages from './messages/messages';
import reviews from './reviews/reviews';
import {
    GraphQLObjectType as ObjectType,
    GraphQLSchema as Schema,
} from 'graphql';

const query = new ObjectType({
    name: 'Query',
    fields: {
        reviews: reviews.query,
    },
});

const mutation = new ObjectType({
    name: 'Mutation',
    fields: {
        ...auth.mutations,
        ...messages.mutations,
        ...reviews.mutations,
    },
});

export default new Schema({ query, mutation });
