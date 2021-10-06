import UserRepository from '../repositories/UserRepository';

class UserService {
  async insert(data) {
    try {
      const { name, username, password } = data;
      if (!name || !username || !password) {
        throw new Error('You should provider a name, username, and password');
      }
      const newUser = await UserRepository.insert({ name, username, password });
      return newUser;
    } catch (err) {
      throw err;
    }
  }
}

export default new UserService();
