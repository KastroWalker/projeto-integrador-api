import ClientModel from '../models/ClientModel';
import { ErrorHandler } from '../helpers/ErrorHandler';

class ClientRepository {
  async insert(client) {
    try {
      const newClient = await ClientModel.create(client);
      return newClient;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong in our server, sorry');
    }
  }

  async searchByUsername(username) {
    try {
      const clientAlreadyExists = await ClientModel.findOne({
        where: { username },
      });
      return clientAlreadyExists;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getAll() {
    try {
      const clients = await ClientModel.findAll();
      return clients;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getById(id) {
    try {
      const client = await ClientModel.findByPk(id);
      return client;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async update(id, name, username) {
    try {
      const updatedClient = await ClientModel.update(
        { name, username },
        { where: { id } }
      );
      return updatedClient;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async delete(id) {
    try {
      const rows = await ClientModel.destroy({ where: { id } });
      return rows;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getPassword(id) {
    try {
      const client = await ClientModel.findByPk(id);
      return client.password;
    } catch (err) {
      console.log(err);
      throw new ErrorHandler(500, 'Something Went Wrong');
    }
  }
}

export default new ClientRepository();
