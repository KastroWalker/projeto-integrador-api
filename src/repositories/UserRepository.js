import UserModel from '../models/UserModel';

class UserRepository {
  async insert(user) {
    try {
      console.log(user);
      return await UserModel.create(user);
    } catch (err) {
      return err;
    }
  }
}

export default new UserRepository();
