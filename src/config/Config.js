import dotenv from 'dotenv';

class Config {
  constructor() {
    dotenv.config();
    this.DB_NAME = process.env.DB_NAME;
    this.DB_USER = process.env.DB_USER;
    this.DB_PASS = process.env.DB_PASS;
    this.DB_HOST = {
      host: 'localhost',
      dialect: 'postgres',
    };
  }
}

export default new Config();
