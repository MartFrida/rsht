import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./components/footer/Footer";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/AllProducts/" element={<AllProducts />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;