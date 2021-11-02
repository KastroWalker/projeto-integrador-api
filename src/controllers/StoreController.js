import StoreService from '../services/StoreService';

class StoreController {
  async create(req, res, next) {
    const {
      name,
      description,
      status,
      openedAt,
      closedAt,
      merchantId,
      addressId,
    } = req.body;
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
}

export default new StoreController();
