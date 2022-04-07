import { Footer, Header, Toast } from "../../components/index";
import { AllProducts } from "../../components/products/products";
import { Filter } from "../../components/filter/filter";
import "./productListingPage.css";
import { useAuth } from "../../context";

function ProductsListingPage() {
  const {
    authState: { toast },
  } = useAuth();
  return (
    <div className="productListing">
      {toast.toastState && <Toast />}
      <Header />
      <main className="main">
        <aside className="filter">
          <Filter />
        </aside>
        <section className="allProducts">
          <AllProducts />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export { ProductsListingPage };
