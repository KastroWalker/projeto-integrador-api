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
}

export default new StoreService();
