import * as jwt from 'jsonwebtoken';
import { ErrorHandler } from '../helpers/ErrorHandler';

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new ErrorHandler(401, 'No token provided');
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      throw new ErrorHandler(401, 'Token Error');
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      throw new ErrorHandler(401, 'Token mal formatted');
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        throw new ErrorHandler(401, 'Invalid token');
      }
      req.user = decoded;
    });
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
