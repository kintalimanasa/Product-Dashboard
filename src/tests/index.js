import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { productReducer } from './productReducer';
import { fetchProducts } from './productActions';

const store = createStore(productReducer);

ReactDOM.render(
  <React.StrictMode>
    <App fetchProducts={fetchProducts} />
  </React.StrictMode>,
  document.getElementById('root')
);