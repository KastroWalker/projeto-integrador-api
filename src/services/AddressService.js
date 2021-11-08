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
      if (addresses.length <= 0) {
        throw new ErrorHandler(404, 'No addresses found');
      }

      return addresses;
    } catch (err) {
      throw err;
    }
  }

  async update(id, address) {
    const { road, number, district, city, zipCode } = address;
    try {
      if (!id || !road || !number || !district || !city || !zipCode) {
        throw new ErrorHandler(400, 'Provide the required data');
      }
      const updatedAddress = await AddressRepository.update(id, address);
      if (updatedAddress <= 0) {
        throw new ErrorHandler(400, 'Update failed ');
      }

      return address;
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new ErrorHandler(400, 'Provide the required data');
      }
      const deletedAddress = await AddressRepository.delete(id);
      if (deletedAddress <= 0) {
        throw new ErrorHandler(400, 'Delete failed ');
      }

      return { message: 'Address deleted' };
    } catch (err) {
      throw err;
    }
  }
}

export default new AddressService();
