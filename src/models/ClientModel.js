import { DataTypes, Model } from 'sequelize';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: 'Client',
        tableName: 'clients',
      }
    );
  }
}

export default Client;
