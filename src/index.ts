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
import { MyContext } from './../types.d';
import { HelloResolver } from './resolvers/helloResolver';
import { PlaylistResolver } from './resolvers/playlistResolver';
import { UserResolver } from './resolvers/userResolver';
import { VideoResolver } from './resolvers/videoResolver';
import { authChecker } from './utils/authChecker';

dotenv.config();

createConnection()
  .then(async (_connection) => {
    const app = express();

    const RedisStore = connectRedis(expressSession);
    const redisClient = new Redis({
      port: parseInt(process.env.REDIS_PORT!),
      host: process.env.REDIS_HOSTNAME,
      password: process.env.REDIS_PASSWORD,
    });

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
      playground: true,
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

    app.listen(process.env.PORT, () =>
      console.log(
        'Server started on' + process.env.DOMAIN_URL + process.env.PORT,
      ),
    );
  })
  .catch((err) => console.error(err));
