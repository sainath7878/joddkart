import { useProducts } from "../../context/product-context";
import { ProductCard } from "../productCard/productCard";

function AllProducts() {
  const { state, filteredData } = useProducts();

  return (
    <>
      {state.loader && <h1 className="fs-xl">Fetching data!</h1>}
      {filteredData.map((item) => {
        const {
          _id,
          imgSrc,
          name,
          description,
          price: { original, discounted },
          discount,
          rating,
          inStock,
          badge,
        } = item;
        return (
          <ProductCard
            key={_id}
            name={name}
            imgSrc={imgSrc}
            description={description}
            original={original}
            discounted={discounted}
            discount={discount}
            wishlist={true}
            dismiss={false}
            rating={rating}
            inStock={inStock}
            badge={badge}
            item={item}
          />
        );
      })}
    </>
  );
}

export { AllProducts };
