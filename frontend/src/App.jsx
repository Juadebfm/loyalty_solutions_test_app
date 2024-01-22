import "./App.css";
// import react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AboutPage from "./pages/AboutPage";
import ViewCart from "./pages/ViewCart";
// import components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/viewcart" element={<ViewCart />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
