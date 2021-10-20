import StoreService from '../services/StoreService';

class StoreController {
  async insert(req, res, next) {
    try {
      const { merchant_id } = req.params;
      const { name, description, status } = req.body;
      const newStore = await StoreService.insert({
        merchant_id,
        name,
        description,
        status,
      });
      res.status(201).json(newStore);
    } catch (err) {
      next(err);
    }
  }
}

export default new StoreController();
