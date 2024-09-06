import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductCard = ({ product }) => {
  const { handlePageChange } = useContext(ProductContext);

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Popularity: {product.popularity}</p>
      <button onClick={() => handlePageChange(product)}>View Details</button>
    </div>
  );
};

export default ProductCard;