import React, { Component } from "react";
import axios from "axios";

import ProductCategory from "./ProductCategory";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("./db.json")
      .then(res => {
        const products = res.data;
        console.log(products);
        this.setState({ products: products });
      })
      .catch(function() {
        console.log("error");
      });
  }

  render() {
    const { products } = this.state;
    console.log(products);

    const items = products.map(function(item) {
      return (
        <ProductCategory
          key={item.category}
          category={item.category}
          productItem={item.productItem}
        />
      );
    });

    return (
      <div>
        <div className="container">
          <p>This is the product lists.</p>
          <ul> {items} </ul>
        </div>
      </div>
    );
  }
}
export default Products;
