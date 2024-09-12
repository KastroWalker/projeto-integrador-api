import { Model, DataTypes } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        value: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false },
        discount: { type: DataTypes.FLOAT, allowNull: true },
      },
      {
        sequelize,
        tableName: 'products',
        modelName: 'Product',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Store, { foreignKey: 'storeId', as: 'store' });
    this.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  }
}

export default Product;
