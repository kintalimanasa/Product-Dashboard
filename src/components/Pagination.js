import React, { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Pagination = () => {
  const { currentPage, productsPerPage, filteredProducts } = useContext(ProductContext);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="pagination">
      {Array(totalPages)
        .fill(0)
        .map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={pageNumber === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;