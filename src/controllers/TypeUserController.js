import TypeUserService from '../services/TypeUserService';

class TypeUserController {
  async create(req, res) {
    const typeUser = req.body;
    try {
      const newType = await TypeUserService.create(typeUser);
      return res.status(201).json(newType);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new TypeUserController();
