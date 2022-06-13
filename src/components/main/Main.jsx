import "./main.css";
import { CategoryCard } from "./components/CatergoryCard";
import { ProductCard } from "../productCard/productCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/product-context";
import { initialState } from "../../reducer/globalReducer";
function Main() {
  const { dispatch, filteredData } = useProducts();

  useEffect(() => {
    dispatch({ type: "CLEAR_FILTERS", payload: initialState.filters });
  }, [dispatch]);

  return (
    <div>
      <section className="hero d-flex align-center">
        <div className="banner">
          <span className="banner-text">Gamers don't die, They respawn.</span>
          <p className="banner-text mb-m">Buy Games at Flat 40% OFF</p>
          <Link to="/products">
            <li className="d-inline-block fs-s mr-sm">
              <button className="btn btn-secondary fs-m">Shop Now</button>
            </li>
          </Link>
        </div>
      </section>

      <section className="featured-categories">
        <h1 className="fs-xl text-align-center">Featured Categories</h1>
        <div className="title-underline"></div>
        <div className="grid">
          <CategoryCard />
        </div>
      </section>

      <section>
        <h1 className="fs-xl text-align-center">Trending Games</h1>
        <div className="title-underline"></div>
        <div className="grid">
          {filteredData.slice(0, 4).map((item) => {
            const {
              _id,
              imgSrc,
              name,
              description,
              price: { original, discounted },
              discount,
              badge,
              inStock,
              rating,
            } = item;
            return (
              <ProductCard
                key={_id}
                _id={_id}
                name={name}
                imgSrc={imgSrc}
                description={description}
                original={original}
                discounted={discounted}
                discount={discount}
                wishlist={true}
                dismiss={false}
                inStock={inStock}
                badge={badge}
                rating={rating}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export { Main };
