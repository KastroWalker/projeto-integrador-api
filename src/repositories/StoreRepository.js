import { ErrorHandler } from '../helpers/ErrorHandler';
import StoreModel from '../models/StoreModel';

class StoreRepository {
  async insert(store) {
    try {
      const newStore = await StoreModel.create(store);
      return newStore;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async update(id, name, description, status) {
    try {
      const rows = await StoreModel.update(
        { name, description, status },
        { where: id }
      );
      return rows;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new StoreRepository();
