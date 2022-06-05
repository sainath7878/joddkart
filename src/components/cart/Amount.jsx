import { useEffect, useState } from "react";
import { useProducts } from "../../context/product-context";

function Amount() {
  const { state } = useProducts();
  const { cart } = state;
  const [amount, setAmount] = useState({ totalMRP: 0, totalDiscount: 0 });
  const {totalMRP, totalDiscount} = amount
  useEffect(() => {
    setAmount(
      cart.reduce(
        (acc, {price, qty}) => ({
          ...acc,
          totalMRP: acc.totalMRP + price.original * qty,
          totalDiscount:
            acc.totalDiscount + price.discounted * qty,
        }),
        { totalMRP: 0, totalDiscount: 0 }
      )
    );
  }, [cart]);
  return (
    <>
      <h3 className="text-align- fs-s">PRICE DETAILS: ({cart.length})Items</h3>
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
      <button className="btn btn-secondary">CHECKOUT</button>
    </>
  );
}

export { Amount };
