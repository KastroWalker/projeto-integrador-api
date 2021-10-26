import { DataTypes, Model } from 'sequelize';
import MerchantModel from './MerchantModel';
import TypePurchaseModel from './TypePurchaseModel';
import connection from '../database';
import AddressModel from './AddressModel';

class Store extends Model {}

Store.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false },
    openedAt: { type: DataTypes.TIME, allowNull: false },
    closedAt: { type: DataTypes.TIME, allowNull: false },
  },
  { sequelize: connection, modelName: 'Store', tableName: 'stores' }
);

Store.belongsTo(MerchantModel, { foreignKey: 'merchantId', as: 'owner' });
Store.belongsTo(AddressModel, { foreignKey: 'addressId', as: 'address' });
Store.belongsToMany(TypePurchaseModel, {
  foreignKey: 'storeId',
  through: 'purchaseTypesStores',
  as: 'typesPurchases',
});

export default Store;
