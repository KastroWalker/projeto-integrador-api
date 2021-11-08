import AddressModel from '../models/AddressModel';
import { ErrorHandler } from '../helpers/ErrorHandler';

class AddressRepository {
  async create(address) {
    try {
      const createdAddress = await AddressModel.create(address);
      return createdAddress;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async getAll() {
    try {
      const addresses = await AddressModel.findAll();
      return addresses;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }

  async update(id, address) {
    try {
      const updatedAddress = await AddressModel.update(address, {
        where: { id },
      });
      return updatedAddress;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new AddressRepository();
