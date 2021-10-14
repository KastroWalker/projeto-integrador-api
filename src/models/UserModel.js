import { DataTypes, Model } from 'sequelize';
import connection from '../database';
import TypeUserModel from './TypeUserModel';

class User extends Model {}

User.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  }
);

User.belongsTo(TypeUserModel, { foreignKey: 'type_id', as: 'type_user' });

export default User;
