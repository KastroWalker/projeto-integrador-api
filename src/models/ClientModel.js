import { DataTypes, Model } from 'sequelize';
import connection from '../database';

class Client extends Model {}

Client.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'Client',
    tableName: 'clients',
    timestamps: false,
  }
);

export default Client;
