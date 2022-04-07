import { Header, Footer, EmptyCart, Toast } from "../../components/index";
import { useProducts } from "../../context/product-context";
import { WishList } from "../../components/wishList/wishList";
import "./wishListPage.css";
import { useAuth } from "../../context";
import { useDocument } from "../../hooks/useDocument";

function WishListPage() {
  useDocument("WishList")
  const { state } = useProducts();
  const {
    authState: { toast },
  } = useAuth();
  return (
    <>
      <Header />
      {toast.toastState && <Toast />}

      <h1 className="fs-xl text-align-center">
        My WishList ({state.wishList.length}) items
      </h1>
      <div className="title-underline"></div>
      {state.wishList.length === 0 ? (
        <EmptyCart />
      ) : (
        <section className="wishlist-products">
          <WishList />
        </section>
      )}
      <Footer />
    </>
  );
}

export { WishListPage };
