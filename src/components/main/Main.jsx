import "./main.css";
import { CategoryCard } from "./components/CatergoryCard";
import { trendingProducts } from "../../data/data.products";
import { ProductCard } from "../productCard/productCard";
function Main() {
  return (
    <div>
      <section className="hero d-flex align-center">
        <div className="banner">
          <span className="banner-text">Gamers don't die, They respawn.</span>
          <p className="banner-text mb-m">Buy Games at Flat 40% OFF</p>
          <a href="/" className="btn btn-secondary fs-m">
            {" "}
            Shop Now
          </a>
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
          {trendingProducts.map(
            ({
              key,
              imgSrc,
              name,
              description,
              price: { originalPrice, discountedPrice },
              discount,
            }) => {
              return (
                <ProductCard
                  id={key}
                  name={name}
                  imgSrc={imgSrc}
                  description={description}
                  originalPrice={originalPrice}
                  discountedPrice={discountedPrice}
                  discount={discount}
                  wishlist={true}
                  dismiss={false}
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
