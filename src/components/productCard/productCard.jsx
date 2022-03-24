import "./productCard.css";
import { cartSolid } from "../../assets/images/index";
import { BiHeartFill, BiXLg, BiStarFill } from "../../assets/icons/Icons";
import { useProducts, useAuth } from "../../context/index";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({
  imgSrc,
  name,
  description,
  original,
  discounted,
  discount,
  wishlist,
  dismiss,
  badge,
  rating,
  inStock,
  item,
}) {
  const { state, dispatch } = useProducts();
  const { authState } = useAuth();
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("token");

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        dispatch({ type: "ADD_ITEM_TO_CART", payload: response.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeFromWishList = async (item) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        item.isInWishList = false;
        dispatch({
          type: "TOGGLE_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToWishList = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        dispatch({ type: "TOGGLE_WISHLIST", payload: response.data.wishlist });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <img src={imgSrc} alt={name} className="card-image" />
      <h1 className="fs-s card-text-highlight">{name}</h1>
      <p className="fs-s">{description}</p>
      <p className="fs-s">
        <del>₹{original}</del> <span>₹{discounted}</span>
        <span className="discount"> {discount}%</span>
      </p>
      <p className="d-flex align-center fs-s rating">
        {rating}
        <BiStarFill />
      </p>
      <div className="cta-container d-flex align-center">
        {inStock ? (
          state.cart.find((cartItem) => cartItem["id"] === item.id) ? (
            <Link to="/cart">
              <button className="btn btn-secondary d-flex-center">
                <img src={cartSolid} alt="cart" className="btn-icon" /> Go to
                Cart
              </button>
            </Link>
          ) : (
            <>
              {authState.isLoggedIn ? (
                <button
                  className="btn btn-secondary d-flex-center"
                  onClick={() => addToCart(item)}
                >
                  <img src={cartSolid} alt="cart" className="btn-icon" />
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-secondary d-flex-center"
                  onClick={() => navigate("/signin", { replace: true })}
                >
                  <img src={cartSolid} alt="cart" className="btn-icon" />
                  Add to Cart
                </button>
              )}
            </>
          )
        ) : (
          <button className="btn btn-primary d-flex-center" disabled>
            <img src={cartSolid} alt="cart" className="btn-icon " /> Out Of
            Stock
          </button>
        )}
      </div>
      <button className="card-btn-dismiss">
        {wishlist &&
          (state.wishList.find(
            (wishListItem) => wishListItem._id === item._id
          ) ? (
            <BiHeartFill
              className={"fs-m inWishList"}
              onClick={() => removeFromWishList(item)}
            />
          ) : (
            <BiHeartFill
              className={"fs-m"}
              onClick={() => addToWishList(item)}
            />
          ))}
        {dismiss && <BiXLg className="fs-m" />}
      </button>
      {badge && <span className="card-badge">On Sale</span>}
    </div>
  );
}

export { ProductCard };
