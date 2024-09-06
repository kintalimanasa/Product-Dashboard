import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
    const { product } = useContext(ProductContext);
  
    return (
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        <p>Popularity: {product.popularity}</p>
        <p>Description: {product.description || 'No description available'}</p>
      </div>
    );
  };
  
  export default ProductDetails;