import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ViewCart.css";

const ViewCart = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="view_cart_cart">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty_cart">Your cart is empty.</p>
      ) : (
        <div className="view_cart_container">
          {/* Display each cart item */}
          {cart.map((item) => (
            <div key={item.id} className="view_item_container">
              <img src={item.image} alt="view_item_image" className="item_img" />
              <div className="item_details">
                <p className="item_title">{item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.amount}</p>
              </div>
            </div>
          ))}

          {/* Display total */}
          <div className="total_price">
            <p>Total: ${total.toFixed(2)}</p>
          </div>

          {/* Add checkout button or any other action buttons as needed */}
        </div>
      )}
    </div>
  );
};

export default ViewCart;
