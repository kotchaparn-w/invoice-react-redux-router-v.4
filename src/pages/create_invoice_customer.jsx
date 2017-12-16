import React, { Component } from 'react';

import Header from '../components/Header';
import CreateCustomer from '../components/Create_customer';

const CreateInvoiceCustomer = (props) => {
  return (
    <div>
      <Header title="Add Invoice: Create Customer" />
      <CreateCustomer />
    </div>
  );
}

export default CreateInvoiceCustomer;
