import MerchantService from '../services/MerchantService';

class MerchantController {
  async create(req, res, next) {
    try {
      const { name, username, password, email } = req.body;
      const newMerchant = await MerchantService.insert(
        name,
        username,
        password,
        email
      );
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
    const updatedMerchant = req.body;

    try {
      const merchant = await MerchantService.update(id, updatedMerchant);
      res.status(200).json(merchant);
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

  async authenticate(req, res, next) {
    const { username, password } = req.body;
    try {
      const tokenJTW = await MerchantService.authenticate(username, password);
      res.status(200).json(tokenJTW);
    } catch (err) {
      next(err);
    }
  }
}

export default new MerchantController();
