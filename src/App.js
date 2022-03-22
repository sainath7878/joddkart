import './App.css';
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/LandingPage"
import { ProductsListingPage } from "./pages/productsListingPage/productListing"
import { CartPage } from "./pages/CartPage/CartPage";
import { WishListPage } from "./pages/wishlistPage/WishListPage"
import { AuthorizationPage } from "./pages/authorizationPage/authorizationPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsListingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishList" element={<WishListPage />} />
        <Route path="/signin" element={<AuthorizationPage />} />
        <Route path="/signup" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;

