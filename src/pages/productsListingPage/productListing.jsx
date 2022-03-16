import { Footer, Header } from "../../components/index";
import { AllProducts } from "../../components/products/products";
import { Filter } from "../../components/filter/filter";
import "./productListingPage.css";

function ProductsListingPage() {
  return (
    <div className="productListing" >
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
