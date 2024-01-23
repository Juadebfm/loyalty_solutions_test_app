import { useContext } from "react";
// sidebar context
import { SidebarContext } from "../../context/SidebarContext";
// cart context
import { CartContext } from "../../context/CartContext";
//import icons
import { CiShoppingCart } from "react-icons/ci";
// import Link
import { Link, NavLink, useLocation } from "react-router-dom";

import "./Header.css";
import { getCurrentDate } from "../../utils/dateHelper";

const Header = () => {
  const location = useLocation();
  const currentDate = getCurrentDate();
  //header state
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header>
      <nav>
        <div className="top_nav">
          <span>Welcome to Test & Get the best product</span>
          <span>{currentDate}</span>
        </div>
        <div className="mid_nav">
          <div className="logo">
            <Link to="/" className="logo_link">
              Test<span>.</span>
            </Link>
          </div>
          <div
            className="cart"
            onClick={() => {
              setIsOpen(!isOpen);
              console.log("Clicked");
            }}
          >
            <div className="cart_items_number">{itemAmount}</div>
            <CiShoppingCart />
          </div>
        </div>
        <div className="nav_section">
          <ul className="nav_items">
            <li className="nav_item">
              <NavLink
                to="/"
                className={`link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink
                to="/about"
                className={`link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
