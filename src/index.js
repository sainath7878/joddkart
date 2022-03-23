import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { ProductsProvider } from "./context/product-context"
import { AuthProvider } from "./context/auth-context"
// import { signUpHandler } from './hooks/useSignUp';

// Call make Server
makeServer();
// signUpHandler();


ReactDOM.render(
  < React.StrictMode >
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);
