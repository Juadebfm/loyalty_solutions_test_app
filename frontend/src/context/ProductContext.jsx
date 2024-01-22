import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

//Create Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// Define propTypes for ProductProvider
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
