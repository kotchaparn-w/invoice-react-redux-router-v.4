import React from 'react'
import { render } from 'react-dom'
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route,  Router  } from "react-router-dom";


import App from './components/App';
import Customers from './pages/customers';
import Products from './pages/products';
import Invoices from './pages/invoices';
import SelectInvoiceCustomer from './pages/set_invoice_customer';
import CreateInvoiceCustomer from './pages/create_invoice_customer';
import AddInvoiceItems from './pages/add_invoice';

import reducers from './reducers';
import history from './history';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
            <App>
                <Route exact path="/" component={Invoices}/>
                <Route  path="/invoices" component={Invoices}/>
                <Route  path="/customers" component={Customers}/>
                <Route  path="/products" component={Products}/>
                <Route  path="/add-invoice/select-customer" component={SelectInvoiceCustomer}/>
                <Route  path="/add-invoice/create-customer" component={CreateInvoiceCustomer}/>
                <Route  path="/add-invoice/items" component={AddInvoiceItems}/>
            </App>
        </Router >
  </Provider>
  ,document.getElementById('app')
)
