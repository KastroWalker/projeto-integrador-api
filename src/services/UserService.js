import UserRepository from '../repositories/UserRepository';

class UserService {
  async insert(data) {
    try {
      const { name, username, password, type_id } = data;
      if (!name || !username || !password) {
        throw new Error('You should provider a name, username, and password');
      }
      const newUser = await UserRepository.insert({
        name,
        username,
        password,
        type_id,
      });
      return newUser;
    } catch (err) {
      throw err;
    }
  }
}

export default new UserService();
