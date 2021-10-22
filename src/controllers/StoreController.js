import StoreService from '../services/StoreService';

class StoreController {
  async insert(req, res, next) {
    try {
      const { merchant_id } = req.params;
      const { name, description, status } = req.body;
      const newStore = await StoreService.insert(
        merchant_id,
        name,
        description,
        status
      );
      res.status(201).json(newStore);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    const { id, merchant_id } = req.params;
    const { name, description, status } = req.body;

    try {
      await StoreService.update(id, name, description, status, merchant_id);
      return res.status(200).json({ name, description, status });
    } catch (err) {
      next(err);
    }
  }
}

export default new StoreController();
