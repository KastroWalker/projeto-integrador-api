import { Model, DataTypes } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        tableName: 'categories',
        modelName: 'Category',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'categoryId', as: 'products' });
  }
}

export default Category;
