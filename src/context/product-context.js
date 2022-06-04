import axios from "axios";
import { createContext, useContext, useEffect, useReducer, } from "react";
import { toast } from "react-toastify";
import { reducerFunc, initialState } from "../reducer/filterReducer";
import { getSortedData, getFilteredData, getSearchedData } from "../utils/index";


const ProductContext = createContext();

function ProductsProvider({ children }) {

    const encodedToken = localStorage.getItem("token");
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    const addToWishList = async (e, item) => {
        try {
            const response = await axios.post(
                "/api/user/wishlist",
                { product: item },
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            );
            if (response.status === 201) {
                dispatch({ type: "TOGGLE_WISHLIST", payload: response.data.wishlist });
                toast.success("Item added to wishlist");
            }
        } catch (err) {
            toast.error(err.response.data.errors[0]);
        }
    };

    const removeFromWishList = async (e, item) => {
        try {
            const response = await axios.delete(`/api/user/wishlist/${item._id}`, {
                headers: {
                    authorization: encodedToken,
                },
            });
            if (response.status === 200) {
                item.isInWishList = false;
                dispatch({
                    type: "TOGGLE_WISHLIST",
                    payload: response.data.wishlist,
                });
                toast.info("Item removed from wishlist");
            }
        } catch (err) {
            toast.error(err.response.data.errors[0]);
        }
    };

    const addToCart = async (e, item) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "/api/user/cart",
                { product: item },
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            );
            if (response.status === 201) {
                dispatch({ type: "ADD_ITEM_TO_CART", payload: response.data.cart });
                toast.success("Item added to cart");
            }
        } catch (err) {
            toast.error(err.response.data.errors[0]);
        }
    };


    useEffect(() => {
        (async () => {
            try {
                dispatch({ type: "LOADER", payload: true })
                const { data } = await axios.get("/api/products");
                dispatch({ type: "INITIALIZE_PRODUCTS", payload: data.products })
                dispatch({ type: "LOADER", payload: false })
            } catch (err) {
                toast.error(err.response.data.errors[0]);
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
                toast.error(err.response.data.errors[0]);
            }
        })();
    }, [dispatch, encodedToken]);


    const sortedData = getSortedData(state.allProducts, state.filters["sortBy"])
    const searchedData = getSearchedData(sortedData, state.filters.search);
    const filteredData = getFilteredData(searchedData, state.filters);

    return (
        <ProductContext.Provider value={{ filteredData, state, dispatch, addToWishList, addToCart, removeFromWishList }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductsProvider };
export const useProducts = () => useContext(ProductContext);