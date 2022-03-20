import axios from "axios";
import { createContext, useContext, useEffect, useReducer, } from "react";
import { reducerFunc, initialState } from "../reducer/filterReducer";
import { getSortedData, getFilteredData } from "../utils/filter-functions/index";


const ProductContext = createContext();

function ProductsProvider({ children }) {

    const encodedToken = localStorage.getItem("token");
    const [state, dispatch] = useReducer(reducerFunc, initialState);


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

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/user/cart", {
                    headers: {
                        authorization: encodedToken,
                    },
                });
                if (response.status === 200) {
                    dispatch({ type: "INITIALIZE_CART", payload: response.data.cart });
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [dispatch, encodedToken]);


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