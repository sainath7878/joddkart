import {
  Header,
  Footer,
  Cart,
  EmptyCart,
  Amount,
} from "../../components/index";
import { useProducts } from "../../context/product-context";
import "./CartPage.css";

function CartPage() {
  const { state } = useProducts();
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export { CartPage };
