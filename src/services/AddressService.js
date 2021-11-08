import AddressRepository from '../repositories/AddressRepository';
import { ErrorHandler } from '../helpers/ErrorHandler';

class AddressService {
  async create(road, number, district, city, zipCode, complement, coordinate) {
    try {
      if (!road || !number || !district || !city || !zipCode) {
        throw new ErrorHandler(400, 'Provide the required data');
      }
      const address = await AddressRepository.create({
        road,
        number,
        district,
        city,
        zipCode,
        complement,
        coordinate,
      });

      return address;
    } catch (err) {
      throw err;
    }
  }

  async getAll() {
    try {
      const addresses = await AddressRepository.getAll();
      if (!addresses.length <= 0) {
        throw new ErrorHandler(404, 'No addresses found');
      }

      return addresses;
    } catch (err) {
      throw err;
    }
  }
}

export default new AddressService();
