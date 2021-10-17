import ClientRepository from '../repositories/ClientRepository';
import bcrypt from 'bcrypt';
import { ErrorHandler } from '../helpers/ErrorHandler';

class ClientService {
  async insert(data) {
    try {
      const { name, username, password, type_id } = data;
      if (!name || !username || !password) {
        throw new ErrorHandler(
          400,
          'You should provider a name, username, and password'
        );
      }

      const clientAlreadyExists = await ClientRepository.searchByUsername(
        username
      );
      if (clientAlreadyExists) {
        throw new ErrorHandler(400, 'This username already exists');
      }

      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(password, salt);

      let newClient = await ClientRepository.insert({
        name,
        username,
        password: hash,
        type_id,
      });

      delete newClient.dataValues.password;

      return newClient;
    } catch (err) {
      throw err;
    }
  }

  async getAll() {
    try {
      const clients = await ClientRepository.getAll();
      return clients;
    } catch (err) {
      throw err;
    }
  }

  async getById(id) {
    try {
      const client = await ClientRepository.getById(id);
      if (!client) {
        throw new ErrorHandler(400, 'Client not found');
      }
      return client;
    } catch (err) {
      throw err;
    }
  }

  async update(id, name, username, password) {
    try {
      if (!name || !username || !password) {
        throw new ErrorHandler(
          400,
          'You should provider a name, username and password'
        );
      }

      const hashDB = await ClientRepository.getPassword(id);

      const passOK = bcrypt.compareSync(password, hashDB);

      if (!passOK) {
        throw new ErrorHandler(401, 'Invalid password');
      }

      const clientAlreadyExists = await ClientRepository.searchByUsername(
        username
      );
      if (clientAlreadyExists) {
        throw new ErrorHandler(400, 'This username already exists');
      }

      const update = await ClientRepository.update(id, name, username);
      if (update <= 0) {
        throw new ErrorHandler(400, 'update failed');
      }
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      const rows = await ClientRepository.delete(id);
      if (rows <= 0) {
        throw new ErrorHandler(400, 'delete failed');
      }
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

export default new ClientService();
