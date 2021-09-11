import dotenv from 'dotenv-safe';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import expressSession from 'express-session';
import Redis from 'ioredis';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection, getManager } from 'typeorm';
import { MyContext } from '../types';
import { HelloResolver } from './resolvers/helloResolver';
import { PlaylistResolver } from './resolvers/playlistResolver';
import { UserResolver } from './resolvers/userResolver';
import { VideoResolver } from './resolvers/videoResolver';
import { authChecker } from './utils/authChecker';

dotenv.config({
  allowEmptyValues: true,
});

const CORS_SITES =
  process.env.NODE_ENV === 'production'
    ? 'https://trailer-tv.vercel.app'
    : 'http://localhost:3000';

createConnection()
  .then(async (_connection) => {
    const app = express();

    const RedisStore = connectRedis(expressSession);
    const redisClient = new Redis({
      port: parseInt(process.env.REDIS_PORT!),
      host: process.env.REDIS_HOSTNAME,
      password: process.env.REDIS_PASSWORD,
    });

    // Apollo Bug - Overwriting Header
    app.use(
      function (req, res, next) {
        res.header('Access-Control-Allow-Origin', CORS_SITES);
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept',
        );
        next();
      },
      cors({
        origin: CORS_SITES,
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
          secure: true,
          sameSite: 'none',
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
      playground: true,
      introspection: true,
      context: ({ req, res }): MyContext => ({
        em: getManager(),
        req,
        res,
      }),
    });

    apolloServer.applyMiddleware({
      app,
      cors: false,
    });

    app.listen(process.env.PORT, () =>
      console.log(
        'Server started on ' + process.env.DOMAIN_URL + ' ' + process.env.PORT,
      ),
    );
  })
  .catch((err) => console.error(err));
