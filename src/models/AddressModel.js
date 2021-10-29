import { DataTypes, Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        road: { type: DataTypes.STRING, allowNull: false },
        number: { type: DataTypes.STRING, allowNull: false },
        district: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false },
        zipCode: { type: DataTypes.STRING, allowNull: false },
        complement: { type: DataTypes.STRING, allowNull: true },
        coordinate: { type: DataTypes.STRING, allowNull: true },
      },
      { sequelize, modelName: 'Address', tableName: 'addresses' }
    );
  }

  static associate(models) {
    this.hasOne(models.Store, { foreignKey: 'storeId', as: 'store' });
  }
}
export default Address;
