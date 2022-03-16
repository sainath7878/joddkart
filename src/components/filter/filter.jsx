import "./filter.css";

import { BiStarFill } from "../../assets/icons/Icons";
import { useProducts } from "../../context/product-context";

function Filter() {
  const { state, dispatch } = useProducts();

  return (
    <div>
      <div className="filter-heading d-flex">
        <h2 className="fs-s text-align-left d-inline-block">FILTERS</h2>
        <p
          className=" fs-s underline clear-filters"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          CLEAR ALL
        </p>
      </div>
      <div className="divider-line"></div>
      <ul>
        <li className="list-style-none filter-title">
          <h3 className="fs-s">SORT</h3>
        </li>
        <li className="list-style-none">
          <label className="fs-s form-label">
            <input
              type="radio"
              className="form-checkbox"
              name="sort"
              value="high-to-low"
              checked={state.filters["sortBy"] === "HIGH_TO_LOW"}
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
              }
            />
            Price High to Low
          </label>
        </li>
        <li className="list-style-none">
          <label className="fs-s form-label">
            <input
              type="radio"
              className="form-checkbox"
              name="sort"
              value="low-to-high"
              checked={state.filters["sortBy"] === "LOW_TO_HIGH"}
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
              }
            />
            Price Low to High
          </label>
        </li>
        <div className="divider-line"></div>
        <li className="list-style-none filter-title">
          <h3 className="fs-s">CATEGORIES</h3>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={state.filters.categories.includes("FPS")}
              onChange={() => dispatch({ type: "CATEGORIES", payload: "FPS" })}
            />
            FPS
          </label>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={state.filters.categories.includes("RACING")}
              onChange={() =>
                dispatch({ type: "CATEGORIES", payload: "RACING" })
              }
            />
            Racing
          </label>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={state.filters.categories.includes("openWorld")}
              onChange={() =>
                dispatch({ type: "CATEGORIES", payload: "openWorld" })
              }
            />
            Open World
          </label>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={state.filters.categories.includes("FIFA")}
              onChange={() => dispatch({ type: "CATEGORIES", payload: "FIFA" })}
            />
            FIFA
          </label>
        </li>
        <div className="divider-line"></div>
        <li className="list-style-none filter-title">
          <h3 className="fs-s">RATINGS</h3>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="radio"
              name="rating"
              className="form-checkbox"
              onChange={() => dispatch({ type: "RATINGS", payload: 1 })}
            />
            1 <BiStarFill className="fs-s" /> and Above
          </label>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="radio"
              name="rating"
              className="form-checkbox"
              onChange={() => dispatch({ type: "RATINGS", payload: 2 })}
            />
            2 <BiStarFill className="fs-s" /> and Above
          </label>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="radio"
              name="rating"
              className="form-checkbox"
              onChange={() => dispatch({ type: "RATINGS", payload: 3 })}
            />
            3 <BiStarFill className="fs-s" /> and Above
          </label>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="radio"
              name="rating"
              className="form-checkbox"
              onChange={() => dispatch({ type: "RATINGS", payload: 4 })}
            />
            4 <BiStarFill className="fs-s" /> and Above
          </label>
        </li>
        <div className="divider-line"></div>
        <li className="list-style-none filter-title fs-s">PRICE RANGE</li>
        <li className="list-style-none">
          <input
            type="range"
            min="1000"
            max="5000"
            step="500"
            className="input-slider"
            checked={state.filters.priceRange}
            onChange={(e) =>
              dispatch({ type: "PRICE_RANGE", payload: e.target.value })
            }
          />
          <div className="slider-label">
            <label className="fs-s">1000</label>
            <label className="fs-s">to</label>
            <label className="fs-s"> 5000</label>
          </div>
        </li>
        <div className="divider-line"></div>
        <li className="list-style-none filter-title">
          <h3 className="fs-s">Availability</h3>
        </li>
        <li className="list-style-none">
          <label className="form-label fs-s">
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={() => dispatch({ type: "IS_INSTOCK" })}
              checked={!state.filters.includeOutOfStock}
            />
            Include Out Of Stock
          </label>
        </li>
      </ul>
    </div>
  );
}

export { Filter };
