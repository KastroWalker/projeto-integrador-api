import UserModel from '../model/UserModel';

class UserRepository {
  async insert(user) {
    const newUser = await UserModel.create(user);
    return newUser;
  }
}

export default new UserRepository();
