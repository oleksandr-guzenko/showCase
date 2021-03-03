import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    axios
      .get("https://aplproductshowcaseapi.herokuapp.com/api/products")
      .then((res) => setProducts(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
