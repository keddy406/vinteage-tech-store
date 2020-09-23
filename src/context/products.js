// products context
import React from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProducts, flattenProducts } from "../utils/helpers";

export const ProductContext = React.createContext();

//Provider , Consumer, useContext

export default function ProductProvider({ children }) {
  //   const greeting = "hello";
  //   const product = { id: 1, title: "product name" };
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    //when request http set loading true
    setLoading(true);

    axios.get(`${url}/products`).then((res) => {
      //get data from helper and get the data which featured ===true
      const featured = featuredProducts(flattenProducts(res.data));
      const products = flattenProducts(res.data);
      setFeatured(featured);
      setProducts(products);
      setLoading(false);
    });

    return () => {
      //clean up function
    };
  }, []);

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
