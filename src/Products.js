import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {
  render() {
    return (
      <div>
        <h1>Products:</h1>
        <ul>
          <li><Link to="/products/1">product 1</Link></li>
          <li><Link to="/products/2">product 2</Link></li>
          <li><Link to="/products/3">product 3</Link></li>
          <li><Link to="/products/4">product 4</Link></li>
        </ul>
      </div>
    );
  }
}

export default Products;
