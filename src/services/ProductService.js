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

  async delete(id) {
    try {
      if (!id) {
        throw new ErrorHandler(400, 'Id is required');
      }
      const rows = await ProductRepository.delete(id);

      if (rows === 0) {
        throw new ErrorHandler(404, 'Product not found');
      }

      return { success: 'Product deleted' };
    } catch (error) {
      throw error;
    }
  }

  async getByStore(storeId) {
    try {
      if (!storeId) {
        throw new ErrorHandler(400, 'Store id is required');
      }

      const products = await ProductRepository.getByStore(storeId);

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
