import './App.css';
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Authorized, Footer, Header, } from "./components/index"
import { LandingPage, ProductsListingPage, CartPage, WishListPage, AuthorizationPage, NotFound, } from "./pages/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer theme="colored" autoClose={2000} position="top-right" className="fs-s" />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

