import StoreService from '../services/StoreService';

class StoreController {
  async create(req, res, next) {
    const { name, description, status, openedAt, closedAt, addressId } =
      req.body;
    const merchantId = req.user;
    try {
      const store = await StoreService.create(
        name,
        description,
        status,
        openedAt,
        closedAt,
        merchantId,
        addressId
      );
      res.status(201).json(store);
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
      const updatedStore = await StoreService.update(id, store);
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
