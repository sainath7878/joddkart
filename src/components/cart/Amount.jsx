import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddress } from "../../context";
import { useProducts } from "../../context/product-context";

function Amount() {
  const { state } = useProducts();
  const { cart } = state;
  const [amount, setAmount] = useState({ totalMRP: 0, totalDiscount: 0 });
  const { totalMRP, totalDiscount } = amount;
  const navigate = useNavigate();
  const location = useLocation();
  const {
    addressState: {
      addresses: { selectedAddress },
    },
  } = useAddress();

  useEffect(() => {
    setAmount(
      cart.reduce(
        (acc, { price, qty }) => ({
          ...acc,
          totalMRP: acc.totalMRP + price.original * qty,
          totalDiscount: acc.totalDiscount + price.discounted * qty,
        }),
        { totalMRP: 0, totalDiscount: 0 }
      )
    );
  }, [cart]);

  const orderHandler = () => {
    if (selectedAddress && Object.keys(selectedAddress).length === 0) {
      toast.error("Please select an Address");
    } else {
      toast.info("Payment Gateway will be added here");
    }
  };
  return (
    <>
      <h3 className="text-align-center fs-m">
        PRICE DETAILS: ({cart.length})Items
      </h3>
      <div className="title-underline"></div>
      <div className="cart-details-price d-flex fs-s">
        <p>Total MRP</p>
        <p>₹{totalMRP}</p>
      </div>

      <div className="cart-details-price d-flex fs-s">
        <p>Discount on MRP</p>
        <p>
          <span className="amount-highlight">₹{totalMRP - totalDiscount}</span>
        </p>
      </div>

      <div className="cart-details-price d-flex fs-s">
        <p>Delivery Fee</p>
        <p>
          <del>₹99</del>
          <span className="amount-highlight"> FREE</span>
        </p>
      </div>

      <div className="cart-details-price d-flex fs-m">
        <h3>Total Amount</h3>
        <h3>₹{totalDiscount}</h3>
      </div>
      {location.pathname === "/cart" ? (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>
      ) : (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => orderHandler()}
        >
          PLACE ORDER
        </button>
      )}
    </>
  );
}

export { Amount };
