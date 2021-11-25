import ProductRepository from '../repositories/ProductRepository';
import { ErrorHandler } from '../helpers/ErrorHandler';

class ProductService {
  async getAll() {
    try {
      const products = await ProductRepository.getAll();

      if (products.length === 0) {
        throw new ErrorHandler(404, 'Products not found');
      }

      return products;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductService();
