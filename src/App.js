import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//IMPORT CSS
import "./App.css";

//IMPORT COMPONENTS
import Home from "./Components/Home";
import Header from "./Components/Header";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/About" component={About} name="John Doe" />
          <Route exact path="/Contact" component={Contact} name="John Doe" />
        </div>
      </Router>
    );
  }
}

export default App;
