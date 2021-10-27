import { DataTypes, Model } from 'sequelize';
import connection from '../database';
import StoreModel from './StoreModel';

class TypePurchase extends Model {}
TypePurchase.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: connection,
    modelName: 'TypePurchase',
    tableName: 'typePurchases',
  }
);

// TypePurchase.belongsToMany(StoreModel, {
//   foreignKey: 'typePurchaseId',
//   through: 'purchaseTypesStores',
//   as: 'stores',
// });

export default TypePurchase;
