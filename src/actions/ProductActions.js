export const fetchProductsRequest = () => {
    return { type: 'FETCH_PRODUCTS_REQUEST' };
  };
  
  export const fetchProductsSuccess = (products) => {
    return { type: 'FETCH_PRODUCTS_SUCCESS', products };
  };
  
  export const fetchProductsFailure = (error) => {
    return { type: 'FETCH_PRODUCTS_FAILURE', error };
  };
  
  export const fetchProducts = () => {
    return (dispatch) => {
      dispatch(fetchProductsRequest());
      // Make API call to fetch products
      fetch('/api/products')
        .then(response => response.json())
        .then(products => dispatch(fetchProductsSuccess(products)))
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  };