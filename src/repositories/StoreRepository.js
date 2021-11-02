import StoreModel from '../models/StoreModel';
import { ErrorHandler } from '../helpers/ErrorHandler';

class StoreRepository {
  async create(store) {
    try {
      const newStore = StoreModel.create(store);
      return newStore;
    } catch (error) {
      console.log(error);
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getById(id) {
    try {
      if (!id) {
        throw new ErrorHandler(400, 'Id is required');
      }

      const store = await StoreModel.findByPk(id);
      return store;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new StoreRepository();
