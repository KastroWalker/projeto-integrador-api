import AddressModel from '../models/AddressModel';

class AddressRepository {
  async create(address) {
    try {
      const createdAddress = await AddressModel.create(address);
      return createdAddress;
    } catch (err) {
      throw new ErrorHandler(500, 'Something went wrong');
    }
  }
}

export default new AddressRepository();
