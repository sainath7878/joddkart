import { useProducts } from "../../context/product-context";
import { ProductCard } from "../productCard/productCard";

function AllProducts() {
  const { state, filteredData } = useProducts();

  return (
    <>
      {state.loader && <h1 className="fs-xl">Fetching data!</h1>}
      {filteredData.map(
        (
          {
            key,
            imgSrc,
            name,
            description,
            price: { originalPrice, discountedPrice },
            discount,
            rating,
            inStock,
            badge
          }
        ) => {
          return (
            <ProductCard
              key={key}
              id={key}
              name={name}
              imgSrc={imgSrc}
              description={description}
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
              discount={discount}
              wishlist={true}
              dismiss={false}
              rating={rating}
              inStock = {inStock}
              badge={badge}
            />
          );
        }
      )}
    </>
  );
}

export { AllProducts };
