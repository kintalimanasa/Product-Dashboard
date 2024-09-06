import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  it('renders the product list', () => {
    const { getByText } = render(<App />);
    expect(getByText('Product List')).toBeInTheDocument();
  });

  it('fetches products on mount', () => {
    const fetchProducts = jest.fn();
    const { getByText } = render(<App fetchProducts={fetchProducts} />);
    expect(fetchProducts).toHaveBeenCalledTimes(1);
  });

  it('renders an error message if fetch fails', async () => {
    const fetchProducts = jest.fn().mockRejectedValue(new Error('Failed to fetch products'));
    const { getByText } = render(<App fetchProducts={fetchProducts} />);
    await waitFor(() => getByText('Error: Failed to fetch products'));
    expect(getByText('Error: Failed to fetch products')).toBeInTheDocument();
  });
});