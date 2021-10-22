import { ErrorHandler } from '../helpers/ErrorHandler';
import StoreRepository from '../repositories/StoreRepository';

class StoreService {
  async insert(merchant_id, name, description, status) {
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

  async update(id, name, description, status, merchant_id) {
    try {
      if (!name || !description) {
        throw new ErrorHandler(
          400,
          'You should provide a name and description'
        );
      }

      const db_merchant_id = await StoreRepository.getMerchantId(id);
      if (merchant_id !== db_merchant_id) {
        throw new ErrorHandler(400, "That's not your store");
      }

      const rows = await StoreRepository.update(id, name, description, status);
      if (rows.length < 0) {
        throw new ErrorHandler(400, 'update failed');
      }
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

export default new StoreService();
