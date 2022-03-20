import { Header, Footer, EmptyCart } from "../../components/index";
import { useProducts } from "../../context/product-context";
import { WishList } from "../../components/wishList/wishList";
import "./wishListPage.css";

function WishListPage() {
  const { state } = useProducts();
  return (
    <>
      <Header />
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
