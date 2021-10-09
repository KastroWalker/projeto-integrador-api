import UserService from '../services/UserService';

class UserController {
  async createNewUser(req, res) {
    try {
      const { name, username, password } = req.body;
      const { type_id } = req.params;
      const newUser = await UserService.insert({
        type_id,
        name,
        username,
        password,
      });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export default new UserController();
