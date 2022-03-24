import './App.css';
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Authorized } from "./components/index"
import {LandingPage,ProductsListingPage, CartPage, WishListPage, AuthorizationPage } from "./pages/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsListingPage />} />
        <Route element={<Authorized />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishList" element={<WishListPage />} />
        </Route>
        <Route path="/signin" element={<AuthorizationPage />} />
        <Route path="/signup" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;

