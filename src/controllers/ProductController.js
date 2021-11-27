import ProductService from '../services/ProductService';

class ProductController {
  async getAll(req, res, next) {
    try {
      const products = await ProductService.getAll();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const product = await ProductService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const message = await ProductService.delete(req.params.id);
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  }
}
export default new ProductController();
