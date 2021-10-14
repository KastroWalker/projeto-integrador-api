import UserModel from '../models/UserModel';
import { ErrorHandler } from '../helpers/ErrorHandler';

class UserRepository {
  async insert(user) {
    try {
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong in our server, sorry');
    }
  }

  async searchByUsername(username) {
    try {
      const userAlreadyExists = await UserModel.findOne({
        where: { username },
      });
      return userAlreadyExists;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getAllUsers() {
    try {
      const users = await UserModel.findAll();
      return users;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getUserById(id) {
    try {
      const user = await UserModel.findByPk(id);
      return user;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new UserRepository();
