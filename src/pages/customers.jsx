import React from 'react';

import CustomerList from '../components/Customer_list';
import Header from '../components/Header';

const Customers = (props) => {
  return (
    <div>
      <Header title="Customers" />
      <CustomerList />
    </div>
  );
};

export default Customers;
