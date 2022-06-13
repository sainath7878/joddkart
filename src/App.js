import './App.css';
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Authorized, Footer, Header, SignIn, SignUp, } from "./components/index"
import { LandingPage, ProductsListingPage, CartPage, WishListPage, AuthorizationPage, NotFound, SingleProductPage, CheckOut, } from "./pages/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useAuth } from './context';

function App() {
  const { authDispatch } = useAuth();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      authDispatch({ type: "SET_USER", payload: { encodedToken: token } })
    }
  }, [authDispatch, token])

  return (
    <div className="App">
      <Header />
      <ToastContainer theme="colored" autoClose={2000} position="bottom-right" className="fs-s" />
      <div className="main-container">
        <Routes>
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsListingPage />} />
          <Route path="/products/:productid" element={<SingleProductPage />} />
          <Route element={<Authorized />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishList" element={<WishListPage />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Route>
          <Route element={<AuthorizationPage />} >
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

