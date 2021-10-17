import MerchantService from '../services/MerchantService';

class MerchantController {
  async create(req, res, next) {
    try {
      const { name, username, password } = req.body;
      const newMerchant = await MerchantService.insert({
        name,
        username,
        password,
      });
      res.status(201).json(newMerchant);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const merchants = await MerchantService.getAll();
      res.status(200).json(merchants);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    const { id } = req.params;

    try {
      const merchant = await MerchantService.getById(id);
      res.status(200).json(merchant);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const { name, username, password } = req.body;

    try {
      await MerchantService.update(id, name, username, password);
      res.status(200).json({ name, username });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await MerchantService.delete(id);
      res.status(200).json({ success: 'deleted successfully' });
    } catch (err) {
      next(err);
    }
  }
}

export default new MerchantController();
