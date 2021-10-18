import MerchantModel from '../models/MerchantModel';
import { ErrorHandler } from '../helpers/ErrorHandler';

class MerchantRepository {
  async insert(merchant) {
    try {
      const newMerchant = await MerchantModel.create(merchant);
      return newMerchant;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong in our server, sorry');
    }
  }

  async searchByUsername(username) {
    try {
      const merchantAlreadyExists = await MerchantModel.findOne({
        where: { username },
      });
      return merchantAlreadyExists;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getAll() {
    try {
      const merchants = await MerchantModel.findAll();
      return merchants;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getById(id) {
    try {
      const merchant = await MerchantModel.findByPk(id);
      return merchant;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async update(id, name, username) {
    try {
      const updatedMerchant = await MerchantModel.update(
        { name, username },
        { where: { id } }
      );
      return updatedMerchant;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async delete(id) {
    try {
      const rows = await MerchantModel.destroy({ where: { id } });
      return rows;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getPassword(id) {
    try {
      const merchant = await MerchantModel.findByPk(id);
      return merchant.password;
    } catch (err) {
      console.log(err);
      throw new ErrorHandler(500, 'Something Went Wrong');
    }
  }
}

export default new MerchantRepository();
