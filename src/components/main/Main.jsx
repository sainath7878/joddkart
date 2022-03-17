import "./main.css";
import { CategoryCard } from "./components/CatergoryCard";
import { ProductCard } from "../productCard/productCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useProducts } from "../../context/product-context";
import { initialState } from "../../reducer/filterReducer";
function Main() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const { dispatch } = useProducts();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/products");
        setTrendingProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    dispatch({ type: "CLEAR_FILTERS", payload: initialState.filters })
  }, [dispatch])

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
          {trendingProducts
            .slice(0, 4)
            .map(
              ({
                key,
                imgSrc,
                name,
                description,
                price: { original, discounted },
                discount,
                badge,
                inStock,
                rating,
              }) => {
                return (
                  <ProductCard
                    key={key}
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
                  />
                );
              }
            )}
        </div>
      </section>
    </div>
  );
}

export { Main };
