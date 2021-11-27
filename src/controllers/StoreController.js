import StoreService from '../services/StoreService';

class StoreController {
  async create(req, res, next) {
    const { id: merchantId, type } = req.user;
    const store = { ...req.body, merchantId, type };
    try {
      const newStore = await StoreService.create(store);
      res.status(201).json(newStore);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const store = await StoreService.getById(id);
      res.status(200).json(store);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const stores = await StoreService.getAll();
      res.status(200).json(stores);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const store = req.body;
    try {
      await StoreService.update(id, store);
      res.status(200).json(store);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await StoreService.delete(id);
      res.status(200).json({ message: 'Store deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

export default new StoreController();
