import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MdiCash100, MdiTag, MdiTruck } from "../../assets/icons/Icons";
import { cartSolid } from "../../assets/images/index";
import { useAuth, useProducts } from "../../context";
import "./singleProductPage.css";

function SingleProductPage() {
  const { productid } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const {
    state: { cart, wishList },
    addToCart,
    addToWishList,
  } = useProducts();
  const {
    authState: { isLoggedIn },
  } = useAuth();
  const location = useLocation();
  const from = location?.pathname;

  const perksData = [
    { icon: MdiTruck, text: "Fast & No-contact Delivery" },
    { icon: MdiTag, text: "Price displayed is inclusive of GST" },
    { icon: MdiCash100, text: "Cash on Delivery available" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/products/${productid}`);
        if (response.status === 200) {
          setSingleProduct(response.data.product);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [productid]);

  return (
    <div className="single-product-container">
      {Object.keys(singleProduct).length > 0 ? (
        <div className="horizontal-card single-product-card">
          <img
            src={singleProduct.imgSrc}
            alt={singleProduct.name}
            className="single-product-card-image"
          />
          <div className="card-content single-product-card-content">
            <h1 className="fs-m card-text-highlight">{singleProduct.name}</h1>
            <p className="fs-s">{singleProduct.description}</p>
            <p className="fs-s">
              <del>₹{singleProduct.price.original}</del> ₹
              {singleProduct.price.discounted}
              <span className="discount">{singleProduct.discount}%</span>
            </p>
            <div className="underline"></div>
            <div className="perks">
              {perksData.map((item, index) => {
                return (
                  <p key={index} className="fs-m">
                    <item.icon className="mr-sm" />
                    {item.text}
                  </p>
                );
              })}
            </div>
            <div className="cta">
              {singleProduct.inStock ? (
                isLoggedIn ? (
                  cart.find(
                    (cartItem) => cartItem._id === singleProduct._id
                  ) ? (
                    <button
                      className="btn btn-secondary mr-sm"
                      onClick={() => navigate("/cart")}
                    >
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary mr-sm"
                      onClick={() => addToCart(singleProduct)}
                    >
                      Add to Cart
                    </button>
                  )
                ) : (
                  <button
                    className="btn btn-secondary mr-sm"
                    onClick={() =>
                      navigate("/signin", { state: { from }, replace: true })
                    }
                  >
                    Add To Cart
                  </button>
                )
              ) : (
                <button className="btn btn-primary d-flex-center" disabled>
                  <img src={cartSolid} alt="cart" className="btn-icon " /> Out
                  Of Stock
                </button>
              )}

              {isLoggedIn ? (
                wishList.find(
                  (wishListItem) => wishListItem._id === singleProduct._id
                ) ? (
                  <button
                    className="btn btn-secondary-outline mr-sm "
                    onClick={() => navigate("/wishList")}
                  >
                    Go to WishList
                  </button>
                ) : (
                  <button
                    className="btn btn-secondary-outline mr-sm "
                    onClick={() => addToWishList(singleProduct)}
                  >
                    Add to WishList
                  </button>
                )
              ) : (
                <button
                  className="btn btn-secondary-outline mr-sm"
                  onClick={() =>
                    navigate("/signin", { state: { from }, replace: true })
                  }
                >
                  Add To Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="loader">
          <InfinitySpin color="#a40ae0" />
        </div>
      )}
    </div>
  );
}

export { SingleProductPage };
