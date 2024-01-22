import { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
//import cart context
import { CartContext } from "../context/CartContext";
//import cart context
import { ProductContext } from "../context/ProductContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  //get the product id
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  // if product is not found
  if (!product) {
    return (
      <section className="h-screen justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, images, category } = product;

  const { name } = category;
  console.log(images);
  return (
    <section className="product_details">
      <div className="product_detail">
        <div className="product_details_container">
          {/*image & text*/}
          <div className="main_img">
            <img className="main_img" src={images[0]} alt={title} />
          </div>
          {/*text*/}
          <div>
            <h1 className="title">{title}</h1>
            <div className="price_container">
              <div className="price">${price}</div>
              <p className="product_category">{name}</p>
            </div>
            <p className="description">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="add_to_cart_pd"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
