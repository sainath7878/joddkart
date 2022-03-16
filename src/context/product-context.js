import axios from "axios";
import { createContext, useContext, useEffect, useReducer, } from "react";
import { reducerFunc, initialState } from "../reducer/filterReducer";
import { getSortedData, getFilteredData } from "../utils/filter-functions/index";


const ProductContext = createContext();

function ProductsProvider({ children }) {

    useEffect(() => {
        (async () => {
            try {
                dispatch({ type: "LOADER", payload: true })
                const { data } = await axios.get("/api/products");
                dispatch({ type: "INITIALIZE_PRODUCTS", payload: data.products })
                dispatch({ type: "LOADER", payload: false })
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])

    const [state, dispatch] = useReducer(reducerFunc, initialState);


    const sortedData = getSortedData(state.allProducts, state.filters["sortBy"])
    const filteredData = getFilteredData(sortedData, state.filters);

    return (
        <ProductContext.Provider value={{ filteredData, state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductsProvider };
export const useProducts = () => useContext(ProductContext);