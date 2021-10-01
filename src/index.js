import Express from 'express';
import './database';

const app = Express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is run at http://localhost:${port}`);
});
