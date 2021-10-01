import Sequelize from 'sequelize';
import config from '../config/database';

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      const sequelize = new Sequelize(
        config.DB_NAME,
        config.DB_USER,
        config.DB_PASS,
        { host: 'localhost', dialect: 'postgres' }
      );
      await sequelize.authenticate();
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Database();
