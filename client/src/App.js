import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProductsContextProvider from "./contexts/ProductsContext";
import ScrollToTop from "./helper/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <ProductsContextProvider>
            <Route path='/' exact component={Home} />
            <Route path='/products/:product_id' exact component={Product} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
          </ProductsContextProvider>
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
};

export default App;
