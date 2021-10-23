import { DataTypes, Model } from 'sequelize';
import connection from '../database';

class Merchant extends Model {}

Merchant.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'Merchant',
    tableName: 'merchants',
  }
);

export default Merchant;
