import { DataTypes, Model } from 'sequelize';
import connection from '../database';

class TypeUser extends Model {}

TypeUser.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'TypeUser',
    tableName: 'type_users',
    timestamps: false,
  }
);

export default TypeUser;
