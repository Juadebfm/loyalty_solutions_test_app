import PropTypes from "prop-types";
import { BsFillBagFill } from "react-icons/bs";
import { generateRandomStarRating } from "../helper/helper";

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  const starRating = generateRandomStarRating();

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {starRating}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  prevPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
};

export default Card;
