import UserModel from '../models/UserModel';

class UserRepository {
  async insert(user) {
    try {
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async searchByUsername(username) {
    try {
      const userAlreadyExists = await UserModel.findOne({
        where: { username },
      });
      return userAlreadyExists;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new UserRepository();
