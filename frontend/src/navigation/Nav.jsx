import PropTypes from "prop-types";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="logo_container">
        <h1>Test</h1>
      </div>
      <div className="nav_container">
        <input
          className="search_input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search Product"
        />
      </div>
      <div className="profile_container">
        <a href="">
          <AiOutlineShoppingCart className="nav_icon" />
        </a>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Nav;
