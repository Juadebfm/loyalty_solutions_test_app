import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
//import icons
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";

import "./Product.css";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Destructure product
  const { id, title, price, images } = product;

  return (
    <div className="product_card">
      <div className="">
        <div className="">
          {/* Image */}
          <Link to={`/product/${id}`}>
            <div className="image_overlay">
              <img className="" src={images[0]} alt="" />
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
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Product;
