import PropTypes from "prop-types";
import Card from "../components/Card";
import "./Product.css";
import Pagination from "../pagination/Pagination";

const Product = ({ result, currentPage, itemsPerPage, onPageChange }) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(result)
    ? result.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  return (
    <>
      <section className="card-container">
        {currentItems.map((item) => (
          <Card key={Math.random()} {...item} />
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={result.length}
        onPageChange={onPageChange}
      />
    </>
  );
};

Product.propTypes = {
  result: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Product;
