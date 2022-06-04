import "./productCard.css";
import { cartSolid } from "../../assets/images/index";
import { BiHeartFill, BiXLg, BiStarFill } from "../../assets/icons/Icons";
import { useProducts, useAuth } from "../../context/index";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  _id,
}) {
  const { state, addToWishList, addToCart, removeFromWishList } = useProducts();
  const { authState } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.pathname || "/";

  return (
    <div className="card">
      <Link to={`${_id}`}>
        <img src={imgSrc} alt={name} className="card-image" />
      </Link>
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
                  onClick={(event) => addToCart(event, item)}
                >
                  <img src={cartSolid} alt="cart" className="btn-icon" />
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-secondary d-flex-center"
                  onClick={() =>
                    navigate("/signin", { replace: true, state: { from } })
                  }
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
      {authState.isLoggedIn ? (
        <button className="card-btn-dismiss">
          {wishlist &&
            (state.wishList.find(
              (wishListItem) => wishListItem._id === item._id
            ) ? (
              <BiHeartFill
                className={"fs-m inWishList"}
                onClick={(event) => removeFromWishList(event, item)}
              />
            ) : (
              <BiHeartFill
                className={"fs-m"}
                onClick={(event) => addToWishList(event, item)}
              />
            ))}
          {dismiss && <BiXLg className="fs-m" />}
        </button>
      ) : (
        <button className="card-btn-dismiss">
          {" "}
          <BiHeartFill
            className={"fs-m"}
            onClick={() =>
              navigate("/signin", { replace: true, state: { from } })
            }
          />
        </button>
      )}

      {badge && <span className="card-badge">On Sale</span>}
    </div>
  );
}

export { ProductCard };
