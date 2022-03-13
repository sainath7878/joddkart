import uuid from "react-uuid";
import "./categoryCard.css"

import { fps, fifa, openWorld, racing } from "../../../assets/images/index";

const categories = [
  { name: "FPS", imgSrc: fps },
  { name: "Racing", imgSrc: racing },
  { name: "Open World", imgSrc: openWorld },
  { name: "Fifa", imgSrc: fifa },
];

function CategoryCard() {
  return categories.map((item) => {
    return (
      <div key={uuid()} className="card-vertical">
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
