import { DataTypes, Model } from 'sequelize';

class Merchant extends Model {
  static init(sequelize) {
    super.init(
      {
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: 'Merchant',
        tableName: 'merchants',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Store, { foreignKey: 'merchantId', as: 'stores' });
  }
}

export default Merchant;
