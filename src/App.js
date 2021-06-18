import React, { useState, useEffect } from "react";
import "./tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Conponents/Header";
import Footer from "./Conponents/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Products";
import Search from "./Views/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:slug">
              <Product />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
