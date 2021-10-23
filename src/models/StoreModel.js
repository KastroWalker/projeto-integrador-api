import { DataTypes, Model } from 'sequelize';
import MerchantModel from '../models/MerchantModel';
import connection from '../database';

class Store extends Model {}

Store.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.BOOLEAN },
  },
  {
    sequelize: connection,
    modelName: 'Store',
    tableName: 'stores',
  }
);

Store.belongsTo(MerchantModel, { foreignKey: 'merchantId', as: 'owner' });

export default Store;
