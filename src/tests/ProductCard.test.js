import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard component', () => {
  it('renders product name and price', () => {
    const product = { name: 'Product 1', price: 10.99 };
    const { getByText } = render(<ProductCard product={product} />);
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(`$${product.price}`)).toBeInTheDocument();
  });

  it('calls onClick handler when button is clicked', () => {
    const product = { name: 'Product 1', price: 10.99 };
    const onClick = jest.fn();
    const { getByRole } = render(<ProductCard product={product} onClick={onClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});