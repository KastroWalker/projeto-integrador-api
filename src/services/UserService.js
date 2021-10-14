import UserRepository from '../repositories/UserRepository';
import bcrypt from 'bcrypt';

class UserService {
  async insert(data) {
    try {
      const { name, username, password, type_id } = data;
      if (!name || !username || !password) {
        throw new Error('You should provider a name, username, and password');
      }

      const userAlreadyExists = await UserRepository.searchByUsername(username);
      if (userAlreadyExists) {
        throw new Error('This username already exists');
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
      throw new Error(err.message);
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
}

export default new UserService();
