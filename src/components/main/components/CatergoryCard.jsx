import "./categoryCard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../../context/product-context";

function CategoryCard() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.categories);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const { dispatch } = useProducts();
  return categories.map(({ key, name, imgSrc }) => {
    return (
      <div key={key} className="card-vertical">
        <Link
          to="/products"
          onClick={() =>
            dispatch({ type: "PRODUCTS_WITH_CATEGORIES", payload: name })
          }
        >
          <div className="overlay fs-l d-flex justify-center align-center">
            {name}
          </div>
          <img
            loading="lazy"
            src={imgSrc}
            alt="Racing Games"
            className="image-res"
          />
        </Link>
      </div>
    );
  });
}

export { CategoryCard };
