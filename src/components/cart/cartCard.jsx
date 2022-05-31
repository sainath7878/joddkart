import axios from "axios";
import { toast } from "react-toastify";
import { BiDashLg, BiPlusLg, BiTrashFill } from "../../assets/icons/Icons";
import { useProducts } from "../../context/product-context";

function CartCard({
  imgSrc,
  name,
  description,
  original,
  discounted,
  discount,
  quantity,
  item,
}) {
  const encodedToken = localStorage.getItem("token");
  const { dispatch, state } = useProducts();
  const removeFromCart = async (item) => {
    try {
      const response = await axios.delete(`/api/user/cart/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        dispatch({
          type: "DELETE_FROM_CART",
          payload: response.data.cart,
        });
        toast.info("Item removed from cart");
      }
    } catch (err) {
      toast.error(err.response.data.errors[0]);
    }
  };

  const updateQuantity = async (item, operation) => {
    if (operation === "add") {
      try {
        const response = await axios.post(
          `/api/user/cart/${item._id}`,
          {
            action: {
              type: "increment",
            },
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 200) {
          dispatch({ type: "INCREMENT_QTY", payload: response.data.cart });
          toast.success("Quantity Updated");
        }
      } catch (err) {
        toast.error(err.response.data.errors[0]);
      }
    } else {
      try {
        const response = await axios.post(
          `/api/user/cart/${item._id}`,
          {
            action: {
              type: "decrement",
            },
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 200) {
          dispatch({ type: "DECREMENT_QTY", payload: response.data.cart });
          toast.success("Quantity decreased");
        }
      } catch (err) {
        toast.error(err.response.data.errors[0]);
      }
    }
  };

  const moveToWishlist = async (item) => {
    removeFromCart(item);
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: { ...item, isInWishList: true } },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        dispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
        toast.info("Item moved to wishlist");
      }
    } catch (err) {
      toast.error(err.response.data.errors[0]);
    }
  };
  return (
    <>
      <div className="horizontal-card">
        <img src={imgSrc} alt={name} className=" horizontal-card-image" />
        <div className="card-content">
          <h1 className="fs-m card-text-highlight">{name}</h1>
          <p className="fs-s">{description}</p>
          <p className="fs-s">
            <del>₹{original}</del> ₹{discounted}
            <span className="discount">{discount}%</span>
          </p>
          <div className="quantity d-flex align-center">
            <button
              className="btn btn-primary"
              disabled={quantity <= 1 ? true : false}
              onClick={() => updateQuantity(item, "subtract")}
            >
              <BiDashLg />
            </button>
            <span className="fs-m">{quantity}</span>
            <button
              className="btn btn-primary"
              onClick={() => updateQuantity(item, "add")}
            >
              <BiPlusLg />
            </button>
          </div>
          <div className="cta">
            <button
              className="btn btn-primary mr-sm "
              disabled={state.wishList.find(
                (wishListItem) => wishListItem._id === item._id
              )}
              onClick={() => moveToWishlist(item)}
            >
              {state.wishList.find(
                (wishListItem) => wishListItem._id === item._id
              )
                ? "Already In WishList"
                : "Move to WishList"}
            </button>
            <button
              className="btn btn-danger d-flex-center"
              onClick={() => removeFromCart(item)}
            >
              <BiTrashFill className="fs-s" /> Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { CartCard };
