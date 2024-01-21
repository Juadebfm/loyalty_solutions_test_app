import PropTypes from "prop-types";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

Button.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
};

export default Button;
