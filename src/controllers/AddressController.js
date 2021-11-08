import AddressService from '../services/AddressService';

class AddressController {
  async create(req, res, next) {
    try {
      const { road, number, district, city, zipCode, complement, coordinate } =
        req.body;
      const address = await AddressService.create(
        road,
        number,
        district,
        city,
        zipCode,
        complement,
        coordinate
      );
      return res.status(200).json(address);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const addresses = await AddressService.getAll();
      return res.status(200).json(addresses);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const address = req.body;
      const updatedAddress = await AddressService.update(id, address);
      return res.status(200).json(updatedAddress);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await AddressService.delete(id);
      return res.status(200).json({ message: 'Address deleted' });
    } catch (err) {
      next(err);
    }
  }
}

export default new AddressController();
