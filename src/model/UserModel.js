import { DataTypes, Model } from 'sequelize';
import connection from '../database';
class UserModel extends Model {}

UserModel.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'User',
  }
);

export default UserModel;
