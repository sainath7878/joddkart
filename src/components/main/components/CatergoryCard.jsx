import "./categoryCard.css";
import axios from "axios";
import { useEffect, useState } from "react";

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
  return categories.map((item) => {
    return (
      <div key={item.key} className="card-vertical">
        <a href="/">
          <div className="overlay fs-l d-flex justify-center align-center">
            {item.name}
          </div>
          <img
            loading="lazy"
            src={item.imgSrc}
            alt="Racing Games"
            className="image-res"
          />
        </a>
      </div>
    );
  });
}

export { CategoryCard };
