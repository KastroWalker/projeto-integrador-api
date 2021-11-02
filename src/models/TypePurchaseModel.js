import { DataTypes, Model } from 'sequelize';

class TypePurchase extends Model {
  static init(sequelize) {
    super.init(
      {
        name: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: 'TypePurchase',
        tableName: 'typePurchases',
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Store, {
      through: 'typePurchasesStores',
      foreignKey: 'typePurchaseId',
      as: 'stores',
    });
  }
}

export default TypePurchase;
