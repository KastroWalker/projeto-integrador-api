import Sequelize from 'sequelize';
import AddressModel from '../models/AddressModel';
import ClientModel from '../models/ClientModel';
import MerchantModel from '../models/MerchantModel';
import StoreModel from '../models/StoreModel';
import TypePurchaseModel from '../models/TypePurchaseModel';
import config from '../config/database';

const connection = new Sequelize(config);

AddressModel.init(connection);
ClientModel.init(connection);
MerchantModel.init(connection);
StoreModel.init(connection);
TypePurchaseModel.init(connection);

AddressModel.associate(connection.models);
MerchantModel.associate(connection.models);
TypePurchaseModel.associate(connection.models);
StoreModel.associate(connection.models);

export default connection;
