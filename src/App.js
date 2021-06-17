import React from "react";
import "./tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Conponents/Header";
import Footer from "./Conponents/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Products";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
