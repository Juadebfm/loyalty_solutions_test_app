import PropTypes from "prop-types";

import { useContext } from "react";
// import Link
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
//import cart context
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, reduceAmount } =
    useContext(CartContext);
  //destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="cart_items">
      <div className="cart_item">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="cart_item_img" src={image} alt="Items for sidebar" />
        </Link>
        <div className="title_remove_container">
          {/* title & remove icon */}
          <div className="">
            {/* title */}
            <Link to={`/product/${id}`} className="title">
              {title}
            </Link>
            {/* remove items */}
            <div onClick={() => removeFromCart(id)} className="">
              <IoMdClose className="close_icon" />
            </div>
          </div>
          <div className="quantity_container">
            {/* quantity */}
            <div className="quantity_container_remove_add">
              {/* minus icon */}
              <div onClick={() => reduceAmount(id)} className="minus">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="amount">{amount}</div>
              {/* plus icon */}
              <div onClick={() => increaseAmount(id)} className="plus">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="price">$ {price}</div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div className="final_price">{`$ ${parseFloat(price * amount).toFixed(
              2
            )}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
