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
  entities: [__dirname + 'dist/entities/*.{ts,js}'],
  subscribers: [__dirname + 'dist/subscribers/*.{ts,js}'],
  migrations: [__dirname + 'dist/migrations/*.{ts,js}'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers',
  },
};
