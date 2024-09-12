import ProductModel from '../models/ProductModel';
import { ErrorHandler } from '../helpers/ErrorHandler';

class ProductRepository {
  async getAll() {
    try {
      const products = await ProductModel.findAll();
      return products;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async create(product) {
    try {
      const newProduct = await ProductModel.create(product);
      return newProduct;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new ErrorHandler(400, 'Id is required');
      }
      const rows = await ProductModel.destroy({
        where: { id },
      });
      return rows;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getByStore(storeId) {
    try {
      const products = await ProductModel.findAll({
        where: { storeId },
      });
      return products;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async update(id, product) {
    try {
      const rows = await ProductModel.update(product, {
        where: { id },
      });
      return rows[0];
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getById(id) {
    try {
      const product = await ProductModel.findOne({
        where: { id },
      });
      return product;
    } catch (error) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new ProductRepository();
