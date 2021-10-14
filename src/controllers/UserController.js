import UserService from '../services/UserService';

class UserController {
  async createNewUser(req, res) {
    try {
      const { name, username, password, type_id } = req.body;
      const newUser = await UserService.insert({
        type_id,
        name,
        username,
        password,
      });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }
}

export default new UserController();
