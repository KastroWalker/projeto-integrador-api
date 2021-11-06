import MerchantRepository from '../repositories/MerchantRepository';
import ClientRepository from '../repositories/ClientRepository';
import bcrypt from 'bcrypt';
import { ErrorHandler } from '../helpers/ErrorHandler';

class MerchantService {
  async insert(name, username, password, email) {
    try {
      if (!name || !username || !password || !email) {
        throw new ErrorHandler(
          400,
          'You should provider a name, username, email and password'
        );
      }

      let usernameAlreadyExists = await MerchantRepository.searchByUsername(
        username
      );
      if (usernameAlreadyExists) {
        throw new ErrorHandler(400, 'This username already exists');
      }

      usernameAlreadyExists = await ClientRepository.searchByUsername(username);
      if (usernameAlreadyExists) {
        throw new ErrorHandler(400, 'This username already exists');
      }

      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(password, salt);

      const newMerchant = await MerchantRepository.insert({
        name,
        username,
        password: hash,
        email,
      });

      delete newMerchant.dataValues.password;

      return newMerchant;
    } catch (err) {
      throw err;
    }
  }

  async getAll() {
    try {
      const merchants = await MerchantRepository.getAll();
      return merchants;
    } catch (err) {
      throw err;
    }
  }

  async getById(id) {
    try {
      const merchant = await MerchantRepository.getById(id);
      if (!merchant) {
        throw new ErrorHandler(400, 'Merchant not found');
      }
      return merchant;
    } catch (err) {
      throw err;
    }
  }

  async update(id, name, username, password, email) {
    try {
      if (!name || !username || !password || !email) {
        throw new ErrorHandler(
          400,
          'You should provider a name, username and password'
        );
      }

      const hashDB = await MerchantRepository.getPassword(id);

      const passOK = bcrypt.compareSync(password, hashDB);

      if (!passOK) {
        throw new ErrorHandler(401, 'Invalid password');
      }

      let usernameAlreadyExists = await MerchantRepository.searchByUsername(
        username
      );
      if (usernameAlreadyExists) {
        throw new ErrorHandler(400, 'This username already exists');
      }

      usernameAlreadyExists = await ClientRepository.searchByUsername(username);
      if (usernameAlreadyExists) {
        throw new ErrorHandler(400, 'This username already exists');
      }

      const update = await MerchantRepository.update({
        id,
        name,
        username,
        email,
      });
      if (update <= 0) {
        throw new ErrorHandler(400, 'update failed');
      }
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      const rows = await MerchantRepository.delete(id);
      if (rows <= 0) {
        throw new ErrorHandler(400, 'delete failed');
      }
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

export default new MerchantService();
