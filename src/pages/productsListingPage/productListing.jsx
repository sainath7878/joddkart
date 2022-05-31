import { AllProducts } from "../../components/products/products";
import { Filter } from "../../components/filter/filter";
import "./productListingPage.css";
import { useDocument } from "../../hooks/useDocument";

function ProductsListingPage() {
  useDocument("Products");
  return (
    <div className="productListing">
      <main className="main">
        <aside className="filter">
          <Filter />
        </aside>
        <section className="allProducts">
          <AllProducts />
        </section>
      </main>
    </div>
  );
}

export { ProductsListingPage };
