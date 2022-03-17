import "./productCard.css";
import { cartSolid } from "../../assets/images/index";
import { BiHeartFill, BiXLg, BiStarFill } from "../../assets/icons/Icons";

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
  inStock
}) {
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
          <button className="btn btn-secondary d-flex-center">
            <img src={cartSolid} alt="cart" className="btn-icon" /> Add to Cart
          </button>
        ) : (
          <button className="btn btn-secondary d-flex-center" disabled>
            <img
              src={cartSolid}
              alt="cart"
              className="btn-icon "
            />{" "}
            Out Of Stock
          </button>
        )}
      </div>
      <button className="card-btn-dismiss">
        {wishlist && <BiHeartFill className="fs-m" />}
        {dismiss && <BiXLg className="fs-m" />}
      </button>
      {badge && <span className="card-badge">On Sale</span>}
    </div>
  );
}

export { ProductCard };
