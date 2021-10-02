import Sequelize from 'sequelize';
import Config from '../config/database';

class Database {
  constructor() {
    this.connection = this.connect();
  }

  connect() {
    try {
      const sequelize = new Sequelize(
        Config.DB_NAME,
        Config.DB_USER,
        Config.DB_PASS,
        { host: 'localhost', dialect: 'postgres' }
      );
      return sequelize;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Database().connection;
