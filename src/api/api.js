import axios from 'axios';

const apiUrl = 'https://cdn.drcode.ai/interview-materials/products.json';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};