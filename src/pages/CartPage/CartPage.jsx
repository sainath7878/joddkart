import {
  Header,
  Footer,
  Cart,
  EmptyCart,
  Amount,
  Toast,
} from "../../components/index";
import { useProducts } from "../../context/product-context";
import "./CartPage.css";
import { useAuth } from "../../context";

function CartPage() {
  const { state } = useProducts();
  const {
    authState: { toast },
  } = useAuth();
  return (
    <>
      <Header />
      {toast.toastState && <Toast />}
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
