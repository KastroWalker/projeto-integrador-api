import TypeUserRepository from '../repositories/TypeUserRepository';

class TypeUserService {
  async create(typeUser) {
    const { name } = typeUser;
    try {
      const newType = await TypeUserRepository.create({ name });
      return newType;
    } catch (err) {
      throw err;
    }
  }
}

export default new TypeUserService();
