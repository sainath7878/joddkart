import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { ProductsProvider, AuthProvider, AddressProvider } from "./context/index";


// Call make Server
makeServer();

ReactDOM.render(
  < React.StrictMode >
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <AddressProvider>
            <App />
          </AddressProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);
