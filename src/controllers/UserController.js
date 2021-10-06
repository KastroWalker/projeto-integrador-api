import UserService from '../services/UserService';

class UserController {
  async createNewUser(req, res) {
    try {
      const data = req.body;
      const newUser = await UserService.insert(data);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export default new UserController();
