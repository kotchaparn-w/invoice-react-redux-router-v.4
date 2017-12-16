import React from 'react';

import AddInvoiceForm from '../components/Add_invoice';
import Header from '../components/Header';

const AddInvoice = (props) => {
  console.log("Add invoice page ran");
  return (
    <div>
      <Header title="Add Invoice: Items" />
      <AddInvoiceForm />
    </div>
  );
};

export default AddInvoice;
