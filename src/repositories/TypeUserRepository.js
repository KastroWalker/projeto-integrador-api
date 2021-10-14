import TypeUserModel from '../models/TypeUserModel';

class TypeUserRepository {
  async create(type_user) {
    try {
      const newType = await TypeUserModel.create(type_user);
      return newType;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new TypeUserRepository();