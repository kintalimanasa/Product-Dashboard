import express from 'express';
import { fetchProducts } from './api';

const app = express();

app.use(express.json());

app.get('/api/products', async (req, res) => {
  try {
    const products = await fetchProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});