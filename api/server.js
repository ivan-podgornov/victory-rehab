import express from 'express';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';
import termite from '@termite/middleware';
import schema from './schema';
import { connect } from './database';

(async () => {
    await connect();
    const server = express();

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.use('/api', graphqlHttp((request, response) => ({
        schema,
        context: { request, response },
        graphiql: process.env.NODE_ENV,
    })));

    server.use(await termite({ mode: process.env.NODE_ENV }));
    server.listen(3000, () => console.log('server is listening on port 3000'));
})();
