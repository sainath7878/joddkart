import { InfinitySpin } from "react-loader-spinner";
import { useProducts } from "../../context/product-context";
import { CartCard } from "./cartCard";

function Cart() {
  const { state } = useProducts();
  const { cart, loader } = state;

  return (
    <>
      {loader ? (
        <div className="loader">
          <InfinitySpin color="#a40ae0" />
        </div>
      ) : (
        <>
          {cart &&
            cart.length > 0 &&
            cart.map((item) => {
              const { _id, imgSrc, name, description, price, discount, qty } =
                item;
              return (
                <CartCard
                  key={_id}
                  name={name}
                  imgSrc={imgSrc}
                  description={description}
                  original={price.original}
                  discounted={price.discounted}
                  discount={discount}
                  quantity={qty}
                  item={item}
                />
              );
            })}
        </>
      )}
    </>
  );
}

export { Cart };
