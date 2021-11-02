import { Model, DataTypes } from 'sequelize';

class Store extends Model {
  static init(sequelize) {
    super.init(
      {
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false },
        openedAt: { type: DataTypes.TIME, allowNull: false },
        closedAt: { type: DataTypes.TIME, allowNull: false },
      },
      { sequelize, modelName: 'Store', tableName: 'stores' }
    );
  }

  static associate(models) {
    this.belongsToMany(models.TypePurchase, {
      through: 'purchaseTypesStores',
      foreignKey: 'storeId',
      as: 'typePurchases',
    });
    this.belongsTo(models.Merchant, { foreignKey: 'merchantId', as: 'owner' });
    this.belongsTo(models.Address, { foreignKey: 'addressId', as: 'address' });
  }
}

export default Store;
