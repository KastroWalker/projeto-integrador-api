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

  async create(product) {
    try {
      const {
        name,
        description,
        value,
        status,
        discount,
        storeId,
        categoryId,
      } = product;

      if (
        !name ||
        !description ||
        !value ||
        !status ||
        !storeId ||
        !categoryId
      ) {
        throw new ErrorHandler(400, 'Invalid product data');
      }
      const newProduct = await ProductRepository.create(product);

      return newProduct;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductService();