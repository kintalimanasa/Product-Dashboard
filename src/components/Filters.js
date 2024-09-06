import React, { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Filters = () => {
  const { handlePriceFilter, handlePopularityFilter } = useContext(ProductContext);
  const [priceFilter, setPriceFilter] = useState('');
  const [popularityFilter, setPopularityFilter] = useState('');

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
    handlePriceFilter(e.target.value);
  };

  const handlePopularityFilterChange = (e) => {
    setPopularityFilter(e.target.value);
    handlePopularityFilter(e.target.value);
  };

  return (
    <div className="filters">
      <div>
        <label>Price:</label>
        <select value={priceFilter} onChange={handlePriceFilterChange}>
          <option value="">All</option>
          <option value="0-5000">0-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-20000">10000-20000</option>
          <option value="20000+">20000+</option>
        </select>
      </div>
      <div>
        <label>Popularity:</label>
        <select value={popularityFilter} onChange={handlePopularityFilterChange}>
          <option value="">All</option>
          <option value="0-10000">0-10000</option>
          <option value="10000-30000">10000-30000</option>
          <option value="30000-50000">30000-50000</option>
          <option value="50000+">50000+</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;