import Sequelize from 'sequelize';
import config from '../config/Config';

class Database {
  constructor() {
    this.connection = this.connect();
  }

  connect() {
    try {
      const sequelize = new Sequelize(config);
      return sequelize;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Database().connection;
