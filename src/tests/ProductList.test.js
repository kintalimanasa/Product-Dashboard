import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ProductList } from './ProductList';

describe('ProductList component', () => {
  it('renders a list of products', () => {
    const products = [
      { name: 'Product 1', price: 10.99 },
      { name: 'Product 2', price: 9.99 },
      { name: 'Product 3', price: 12.99 },
    ];
    const { getByText } = render(<ProductList products={products} />);
    products.forEach((product) => {
      expect(getByText(product.name)).toBeInTheDocument();
      expect(getByText(`$${product.price}`)).toBeInTheDocument();
    });
  });

  it('calls onClick handler when a product is clicked', () => {
    const products = [
      { name: 'Product 1', price: 10.99 },
      { name: 'Product 2', price: 9.99 },
      { name: 'Product 3', price: 12.99 },
    ];
    const onClick = jest.fn();
    const { getByText } = render(<ProductList products={products} onClick={onClick} />);
    const productElement = getByText(products[0].name);
    fireEvent.click(productElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});