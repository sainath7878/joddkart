import {
  Cart,
  EmptyCart,
  Amount,
} from "../../components/index";
import { useProducts } from "../../context/product-context";
import "./CartPage.css";
import { useDocument } from "../../hooks/useDocument";

function CartPage() {
  useDocument("Cart")
  const { state } = useProducts();

  return (
    <>
      <h1 className="fs-xl text-align-center">
        My Cart ({state.cart.length}) items
      </h1>
      <div className="title-underline"></div>
      {state.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <section className="cart">
          <div className="cart-items">
            <Cart />
          </div>
          <div className="cart-details">
            <Amount />
          </div>
        </section>
      )}
    </>
  );
}

export { CartPage };
