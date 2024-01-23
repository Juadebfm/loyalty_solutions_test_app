import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Product.css";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Destructure product
  // const { id, title, price, category, image } = product;
  const { id, title, price, image } = product;

  return (
    <div className="product_card">
      <div className="">
        <div className="">
          {/* Image */}
          <Link to={`/product/${id}`}>
            <div className="image_overlay">
              {/* Assuming image is a string */}
              <img className="" src={image} alt="" />
              <div className="overlay">
                <p>View Details</p>
              </div>
            </div>
          </Link>
          <div className="add_to_cart">
            <p>${price}</p>
            <div className="cart_b" onClick={() => addToCart(product, id)}>
              <CiShoppingCart />
            </div>
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

// PropTypes
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;
