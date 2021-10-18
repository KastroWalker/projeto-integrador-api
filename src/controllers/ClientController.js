import ClientService from '../services/ClientService';

class ClientController {
  async create(req, res, next) {
    try {
      const { name, username, password } = req.body;
      const newClient = await ClientService.insert({
        name,
        username,
        password,
      });
      res.status(201).json(newClient);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const clients = await ClientService.getAll();
      res.status(200).json(clients);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    const { id } = req.params;

    try {
      const client = await ClientService.getById(id);
      res.status(200).json(client);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const { name, username, password } = req.body;

    try {
      await ClientService.update(id, name, username, password);
      res.status(200).json({ name, username });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await ClientService.delete(id);
      res.status(200).json({ success: 'deleted successfully' });
    } catch (err) {
      next(err);
    }
  }
}

export default new ClientController();
