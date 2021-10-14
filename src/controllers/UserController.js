import UserService from '../services/UserService';

class UserController {
  async createNewUser(req, res, next) {
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
      next(err);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  async getUserById(req, res, next) {
    const { id } = req.params;

    try {
      const user = await UserService.getUserById(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
