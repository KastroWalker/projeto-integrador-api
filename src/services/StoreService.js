import { ErrorHandler } from '../helpers/ErrorHandler';
import StoreRepository from '../repositories/StoreRepository';

class StoreService {
  async create(
    name,
    description,
    status,
    openedAt,
    closedAt,
    merchantId,
    addressId
  ) {
    try {
      if (
        !name ||
        !description ||
        !status ||
        !openedAt ||
        !closedAt ||
        !merchantId
      ) {
        throw new ErrorHandler(400, 'Invalid store data');
      }

      const store = await StoreRepository.create({
        name,
        description,
        status,
        openedAt,
        closedAt,
        merchantId,
        addressId,
      });
      return store;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const store = await StoreRepository.getById(id);
      if (!store) {
        throw new ErrorHandler(404, 'Store not found');
      }

      return store;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const stores = await StoreRepository.getAll();
      return stores;
    } catch (error) {
      throw error;
    }
  }
}

export default new StoreService();
