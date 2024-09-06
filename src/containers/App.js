import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Pagination from './Pagination';
import ProductDetails from './ProductDetails';

const App = () => {
  return (
    <ProductProvider>
      <div className="app">
        <SearchBar />
        <Filters />
        <ProductList />
        <Pagination />
        <ProductDetails />
      </div>
    </ProductProvider>
  );
};

export default App;