import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default (props) => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Invoice App</Link>
      </div>
      <ul className="nav navbar-nav">
        <li><Link to="products">Products</Link></li>
        <li><Link to="customers">Customers</Link></li>
        <li><Link to="invoices">Invoices</Link></li>
      </ul>
    </div>
  </nav>
)
