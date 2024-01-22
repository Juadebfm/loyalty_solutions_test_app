import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product/Product";
import "./Home.css";

const Home = () => {
  const { products } = useContext(ProductContext);
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main>
      <div>
        <div className="product_list">
          {currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePrevClick} disabled={currentPage === 1}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
