import { DataTypes, Model } from 'sequelize';
import connection from '../database';
import StoreModel from './StoreModel';

class Address extends Model {}

Address.init(
  {
    road: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.STRING, allowNull: false },
    district: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    zipCode: { type: DataTypes.STRING, allowNull: false },
    complement: { type: DataTypes.STRING, allowNull: true },
    coordinate: { type: DataTypes.STRING, allowNull: true },
  },
  { sequelize: connection, modelName: 'Address', tableName: 'addresses' }
);

// Address.hasOne(StoreModel, { foreignKey: 'addressId', as: 'store' });

export default Address;
