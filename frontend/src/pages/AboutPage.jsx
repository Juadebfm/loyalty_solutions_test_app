import "../pages/AboutPage.css";

const AboutPage = () => {
  return (
    <main className="aboutPage">
      <h1>Key Features</h1>
      <dl>
        <dt>Product Listing:</dt>
        <dd>
          <li>
            Display a grid or list of product cards, each showcasing essential
            information such as product image, name, price, and rating.
          </li>
          <li>
            Simulate a variety of products to demonstrate the flexibility of the
            product page.
          </li>
        </dd>
      </dl>
      <dl>
        <dt>Filtering:</dt>
        <dd>
          <li>
            Implement filters to allow users to narrow down products based on
            categories, price ranges, or other relevant attributes.
          </li>
          <li>
            Provide a clear and intuitive user interface for applying and
            removing filters.
          </li>
        </dd>
      </dl>
      <dl>
        <dt>Sorting:</dt>
        <dd>
          <li>
            Enable users to sort products based on different criteria such as
            price, popularity, and alphabetical order.
          </li>
          <li>Implement both ascending and descending sorting options.</li>
        </dd>
      </dl>
      <dl>
        <dt>Product Details:</dt>
        <dd>
          <li>
            Design a product details modal or page that appears when a user
            clicks on a product.
          </li>
          <li>
            Include detailed information about the product, such as description,
            specifications, and customer reviews.
          </li>
        </dd>
      </dl>
      <dl>
        <dt>Responsive Design:</dt>
        <dd>
          <li>
            Ensure that the product page is responsive and works seamlessly
            across various devices (desktops, tablets, and mobile phones).
          </li>
          <li>Optimize the layout for different screen sizes.</li>
        </dd>
      </dl>
      <dl>
        <dt>Pagination:</dt>
        <dd>
          <li>
            Implement pagination to manage a large number of products
            efficiently.
          </li>
          <li>
            Display a limited number of products per page and provide navigation
            controls.
          </li>
        </dd>
      </dl>
      <dl>
        <dt>Search Functionality:</dt>
        <dd>
          <li>
            Include a search bar that allows users to search for specific
            products by name or keyword.
          </li>
          <li>
            Implement real-time search suggestions for better user experience.
          </li>
        </dd>
      </dl>
      <dl>
        <dt>Cart Interaction:</dt>
        <dd>
          <li>
            Integrate a basic shopping cart icon that updates in real-time as
            users add products to their cart.
          </li>
          <li>
            Provide a smooth transition between the product page and the
            shopping cart.
          </li>
        </dd>
      </dl>
    </main>
  );
};

export default AboutPage;
