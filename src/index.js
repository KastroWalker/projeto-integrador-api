import dotenv from 'dotenv';
import app from './app';
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is run at http://localhost:${port}`);
});
