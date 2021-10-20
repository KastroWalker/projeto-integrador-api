import { ErrorHandler } from '../helpers/ErrorHandler';
import StoreRepository from '../repositories/StoreRepository';

class StoreService {
  async insert(store) {
    const { name, description, status, merchant_id } = store;
    try {
      if (!name || !description) {
        throw new ErrorHandler(
          400,
          'You should provide a name and description for your store'
        );
      }

      const newStore = StoreRepository.insert({
        name,
        description,
        status,
        merchant_id,
      });
      return newStore;
    } catch (err) {
      throw err;
    }
  }
}

export default new StoreService();
