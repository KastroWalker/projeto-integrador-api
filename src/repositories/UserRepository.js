import UserModel from '../models/UserModel';

class UserRepository {
  async insert(user) {
    try {
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (err) {
      throw err;
    }
  }
}

export default new UserRepository();
