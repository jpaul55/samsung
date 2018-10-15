import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src={logo} />
            </Link>

            <div className="nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Products">Products</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
