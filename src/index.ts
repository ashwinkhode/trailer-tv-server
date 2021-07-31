import { authChecker } from './utils/authChecker';
import { PlaylistResolver } from './resolvers/playlistResolver';
import { MyContext } from './../types.d';
import { UserResolver } from './resolvers/userResolver';
import { VideoResolver } from './resolvers/videoResolver';
import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import express from 'express';
import { HelloResolver } from './resolvers/helloResolver';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import connectRedis from 'connect-redis';
import expressSession from 'express-session';
import Redis from 'ioredis';
import cors from 'cors';

createConnection()
  .then(async (_connection) => {
    const app = express();

    const RedisStore = connectRedis(expressSession);
    const redisClient = new Redis();

    app.use(
      cors({
        origin: process.env.DOMAIN_URL,
        credentials: true,
      }),
    );

    app.use(
      expressSession({
        name: 'qid',
        store: new RedisStore({
          client: redisClient,
          disableTouch: true,
        }),
        cookie: {
          httpOnly: true,
          secure: false,
          sameSite: 'lax',
          maxAge: 1000 * 60 * 60 * 24 * 7,
        },
        secret: process.env.SESSION_SECRET!,
        saveUninitialized: false,
        resave: false,
      }),
    );

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          HelloResolver,
          VideoResolver,
          UserResolver,
          PlaylistResolver,
        ],
        validate: false,
        authChecker,
      }),
      context: ({ req, res }): MyContext => ({
        em: getManager(),
        req,
        res,
      }),
    });

    apolloServer.applyMiddleware({
      app,
      cors: {
        origin: process.env.DOMAIN_URL,
        credentials: true,
      },
    });

    app.listen(4000, () => console.log('Server started on localhost:4000'));
  })
  .catch((err) => console.error(err));
