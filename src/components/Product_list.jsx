import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

class ProductList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  renderProduct(product) {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>${product.price}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="product-list table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(this.renderProduct)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products }
}

export default connect(mapStateToProps, actions)(ProductList);
