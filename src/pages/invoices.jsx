import React from 'react';

import InvoiceList from '../components/Invoice_list';
import Header from '../components/Header';

const Invoices = (props) => {
  return (
    <div>
      <Header title="Invoices" />
      <InvoiceList />
    </div>
  );
};

export default Invoices;
