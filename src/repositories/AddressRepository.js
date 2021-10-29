import AddressModel from '../models/AddressModel';
import { ErrorHandler } from '../helpers/ErrorHandler';

class AddressRepository {
  async create(address) {
    try {
      const createdAddress = await AddressModel.create(address);
      return createdAddress;
    } catch (err) {
      console.log(err);
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new AddressRepository();
