import { emptyCart } from "../../assets/images";
import "./emptyCart.css";

function EmptyCart() {
  return (
    <div className="emptyCartContainer">
        <img src={emptyCart} alt="Empty Cart" className="image-round"  />;
  </div>
  )
  
}

export { EmptyCart };
