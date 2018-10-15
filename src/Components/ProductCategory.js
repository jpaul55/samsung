import React, { Component } from "react";

class ProductCategory extends Component {
  render() {
    return (
      <li>
        {this.props.category}
        <p>{this.props.productItem}</p>
      </li>
    );
  }
}

export default ProductCategory;
