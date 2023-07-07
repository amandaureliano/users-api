require('dotenv').config();
require('knex');

module.exports = {
  client: 'pg',
  connection: {
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
    user: process.env.POSTGRES_USERNAME,
  },
  migrations: {
    directory: 'src/migrations',
    extension: 'js',
  },
};
