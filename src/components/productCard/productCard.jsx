import { cartSolid } from "../../assets/images/index";
import { BiHeartFill, BiXLg } from "../../assets/icons/Icons";

function ProductCard({
  imgSrc,
  name,
  description,
  originalPrice,
  discountedPrice,
  discount,
  wishlist,
  dismiss,
}) {
  return (
    <div className="card">
      <img src={imgSrc} alt={name} className="card-image" />
      <h1 className="fs-s card-text-highlight">{name}</h1>
      <p className="fs-s">{description}</p>
      <p className="fs-s">
        <del>₹{originalPrice}</del> ₹{discountedPrice}
        <span className="discount">{discount}%</span>
      </p>
      <div className="cta-container d-flex align-center">
        <button className="btn btn-secondary d-flex-center">
          <img src={cartSolid} alt="cart" className="btn-icon" /> Add to Cart
        </button>
      </div>
      <button className="card-btn-dismiss">
        {wishlist && <BiHeartFill className="fs-m" />}
        {dismiss && <BiXLg className="fs-m" />}
      </button>
      <span className="card-badge">On Sale</span>
    </div>
  );
}

export { ProductCard };
