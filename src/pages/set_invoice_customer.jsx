import React, { Component } from 'react';

import Header from '../components/Header';
import SelectCustomer from '../components/Select_customer';

const SelectInvoiceCustomer = (props) => {
  return (
    <div>
      <Header title="Add Invoice: Select Customer" />
      <SelectCustomer />
    </div>
  );
}

export default SelectInvoiceCustomer;
