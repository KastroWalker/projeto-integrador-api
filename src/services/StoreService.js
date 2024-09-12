import { ErrorHandler } from '../helpers/ErrorHandler';
import StoreRepository from '../repositories/StoreRepository';

class StoreService {
  async create(store) {
    const {
      name,
      description,
      status,
      openedAt,
      closedAt,
      merchantId,
      addressId,
      type,
    } = store;
    try {
      if (
        !name ||
        !description ||
        !status ||
        !openedAt ||
        !closedAt ||
        !merchantId ||
        !type
      ) {
        throw new ErrorHandler(400, 'Invalid store data');
      }

      if (type !== 'merchant') {
        throw new ErrorHandler(401, 'You are not a merchant');
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

  async update(id, store) {
    try {
      const { name, description, status, openedAt, closedAt, merchantId } =
        store;

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
      const updatedStore = await StoreRepository.update(id, store);
      if (updatedStore <= 0) {
        throw new ErrorHandler(404, 'Store not found');
      }

      return updatedStore;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const deletedStore = await StoreRepository.delete(id);
      if (deletedStore <= 0) {
        throw new ErrorHandler(404, 'Store not found');
      }

      return deletedStore;
    } catch (error) {
      throw error;
    }
  }
}

export default new StoreService();
