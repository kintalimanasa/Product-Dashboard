import React, { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
  const { handleSearch } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchInput}
        placeholder="Search products"
      />
    </div>
  );
};

export default SearchBar;