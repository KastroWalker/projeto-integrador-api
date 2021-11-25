import ProductModel from '../models/ProductModel';
import { ErrorHandler } from '../helpers/ErrorHandler';

class ProductRepository {
  async getAll() {
    try {
      const products = await ProductModel.findAll();
      return products;
    } catch (error) {
      console.log(error);
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new ProductRepository();
