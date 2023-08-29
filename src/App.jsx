import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./components/footer/Footer";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/runners_shop/" element={<Home />} />
        <Route path="/runners_shop/product/" element={<Product />} />
        <Route path="/runners_shop/AllProducts/" element={<AllProducts />} />
        <Route path="/runners_shop/*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;