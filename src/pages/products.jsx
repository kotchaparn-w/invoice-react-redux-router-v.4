import React from 'react';

import ProductList from '../components/Product_list';
import Header from '../components/Header';

const Products = (props) => {
  return (
    <div>
      <Header title="Products" />
      <ProductList />
    </div>
  );
};

export default Products;
