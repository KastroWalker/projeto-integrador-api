import UserRepository from '../repositories/UserRepository';
import bcrypt from 'bcrypt';
import { ErrorHandler } from '../helpers/ErrorHandler';

class UserService {
  async insert(data) {
    try {
      const { name, username, password, type_id } = data;
      if (!name || !username || !password) {
        throw new ErrorHandler(
          400,
          'You should provider a name, username, and password'
        );
      }

      const userAlreadyExists = await UserRepository.searchByUsername(username);
      if (userAlreadyExists) {
        throw new ErrorHandler(400, 'This username already exists');
      }

      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = await UserRepository.insert({
        name,
        username,
        password: hash,
        type_id,
      });
      return newUser;
    } catch (err) {
      throw err;
    }
  }

  async getAllUsers() {
    try {
      const users = await UserRepository.getAllUsers();
      return users;
    } catch (err) {
      throw err;
    }
  }

  async getUserById(id) {
    try {
      const user = await UserRepository.getUserById(id);
      if (!user) {
        throw new ErrorHandler(400, 'User not found');
      }
      return user;
    } catch (err) {
      throw err;
    }
  }

  async updateUser(id, name, username) {
    try {
      if (!name) {
        throw new ErrorHandler(400, 'Please enter a name');
      }

      if (!username) {
        throw new ErrorHandler(400, 'Please enter a username');
      }

      const userAlreadyExists = await UserRepository.searchByUsername(username);
      if (userAlreadyExists) {
        throw new ErrorHandler(400, 'This username already exists');
      }

      const updateUser = await UserRepository.updateUser(id, name, username);
      console.log(updateUser);
      if (updateUser <= 0) {
        throw new ErrorHandler(400, 'update failed');
      }
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      const rows = await UserRepository.delete(id);
      if (rows <= 0) {
        throw new ErrorHandler(400, 'delete failed');
      }
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

export default new UserService();
