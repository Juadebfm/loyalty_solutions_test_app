import { useContext } from "react";
//import Link
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import components
import CartItem from "../CartItem/CartItem";
//import sidebar context
import { SidebarContext } from "../../context/SidebarContext";
// import cart context
import { CartContext } from "../../context/CartContext";
//CSS
import "./Sidebar.css";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  console.log(itemAmount);

  const handleCheckoutClick = () => {
    // Close the sidebar when the user clicks on the checkout button
    handleClose();
  };
  return (
    <div
      className={`${isOpen ? "sidebar_active" : "sidebar_non_active"} sidebar`}
    >
      <div className="sidebar_container">
        <div className="contents">
          {/* Shopping Cart Title */}
          <div className="">Shopping Cart {itemAmount}</div>
          {/* icons */}
          <div onClick={handleClose} className="back">
            <IoMdArrowForward className="back_icon" />
          </div>
        </div>
        {/* total */}
        <div className="total_container">
          <div className="total">
            {/* total */}
            <div className="total_details">
              <span className="total_text">Total:</span> ${" "}
              {parseFloat(total).toFixed(2)}
            </div>
            {/* clear cart */}
            <div onClick={clearCart} className="clear_cart">
              <FiTrash2 />
            </div>
          </div>
          <div className="action_btns" onClick={handleCheckoutClick}>
            <Link to={"/viewcart"} className="check_out">
              Checkout
            </Link>
          </div>
        </div>
      </div>
      {/* Cart Item */}
      <div className="Cart_Item">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
