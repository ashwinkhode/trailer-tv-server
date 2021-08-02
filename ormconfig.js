module.exports = {
  // database: process.env.DB,
  // name: process.env.DB_NAME,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: process.env.NODE_ENV === 'development',
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: ['**/entities/*.{ts,js}'],
  subscribers: ['**/subscribers/*.{ts,js}'],
  migrations: ['**/migrations/*.{ts,js}'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers',
  },
};
