import { InfinitySpin } from "react-loader-spinner";
import { useProducts } from "../../context/product-context";
import { ProductCard } from "../productCard/productCard";

function AllProducts() {
  const { state, filteredData } = useProducts();

  return (
    <>
      {state.loader ? (
        <div className="loader">
          <InfinitySpin color="#a40ae0" />
        </div>
      ) : filteredData.length > 0 ? (
        filteredData.map((item) => {
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
        })
      ) : (
        <h1 className="fs-ml">
          No products found! Try selecting a different filter!
        </h1>
      )}
    </>
  );
}

export { AllProducts };
