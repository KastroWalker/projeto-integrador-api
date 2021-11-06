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

  async getAll() {
    try {
      const stores = await StoreModel.findAll();
      return stores;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async update(id, store) {
    try {
      const updatedStore = await StoreModel.update(store, { where: { id } });
      return updatedStore;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async delete(id) {
    try {
      const deletedStore = await StoreModel.destroy({ where: { id } });
      return deletedStore;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new StoreRepository();
