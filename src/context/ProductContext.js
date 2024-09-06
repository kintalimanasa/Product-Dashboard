import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../api';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [popularityFilter, setPopularityFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  const handlePriceFilter = (filter) => {
    setPriceFilter(filter);
    const filteredProducts = products.filter((product) => {
      if (filter === '0-5000') return product.price <= 5000;
      if (filter === '5000-10000') return product.price > 5000 && product.price <= 10000;
      if (filter === '10000-20000') return product.price > 10000 && product.price <= 20000;
      if (filter === '20000+') return product.price > 20000;
      return true;
    });
    setFilteredProducts(filteredProducts);
  };

  const handlePopularityFilter = (filter) => {
    setPopularityFilter(filter);
    const filteredProducts = products.filter((product) => {
      if (filter === '0-10000') return product.popularity <= 10000;
      if (filter === '10000-30000') return product.popularity > 10000 && product.popularity <= 30000;
      if (filter === '30000-50000') return product.popularity > 30000 && product.popularity <= 50000;
      if (filter === '50000+') return product.popularity > 50000;
      return true;
    });
    setFilteredProducts(filteredProducts);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (order === 'price-asc') return a.price - b.price;
      if (order === 'price-desc') return b.price - a.price;
      if (order === 'popularity-asc') return a.popularity - b.popularity;
      if (order === 'popularity-desc') return b.popularity - a.popularity;
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchTerm,
        priceFilter,
        popularityFilter,
        sortOrder,
        currentPage,
        productsPerPage,
        handleSearch,
        handlePriceFilter,
        handlePopularityFilter,
        handleSort,
        handlePageChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };