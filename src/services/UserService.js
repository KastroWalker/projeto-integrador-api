import UserRepository from '../repositories/UserRepository';

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
      const newUser = await UserRepository.insert({
        name,
        username,
        password,
        type_id,
      });
      return newUser;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new UserService();
