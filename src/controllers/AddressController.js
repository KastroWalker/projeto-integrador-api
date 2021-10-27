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
}

export default new AddressController();
