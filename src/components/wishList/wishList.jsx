import axios from "axios";
import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useProducts } from "../../context/index";
import { ProductCard } from "../productCard/productCard";

function WishList() {
  const encodedToken = localStorage.getItem("token");
  const { dispatch, state } = useProducts();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: encodedToken,
          },
        });
        if (response.status === 200) {
          dispatch({
            type: "INITIALIZE_WISHLIST",
            payload: response.data.wishlist,
          });
        }
      } catch (err) {
        toast.error(err.response.data.errors[0]);
      }
    })();
  }, [dispatch, encodedToken]);
  return (
    <>
      {state.wishList && state.wishList.length > 0 ? (
        state.wishList.map((item) => {
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
        <div className="loader">
          <InfinitySpin color="#a40ae0" />
        </div>
      )}
    </>
  );
}

export { WishList };
