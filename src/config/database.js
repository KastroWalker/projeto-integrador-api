import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};
