export const initialState = {
    allProducts: [],
    loader: false,
    filters: {
        sortBy: "",
        categories: [],
        includeOutOfStock: false,
        rating: null,
        priceRange: 2000,
    },
    cart: [],
    wishList: []
}


const reducerFunc = (state, { type, payload }) => {
    const { filters } = state

    switch (type) {
        case "INITIALIZE_PRODUCTS":
            return {
                ...state, allProducts: payload
            }
        case "LOADER":
            return {
                ...state, loader: payload
            }
        case "PRODUCTS_WITH_CATEGORIES":
            return {
                ...state, filters: { ...filters, categories: filters.categories.concat(payload) }
            }

        case "SORT_BY":
            return {
                ...state, filters: { ...filters, sortBy: payload }
            }
        case "CATEGORIES":
            return state.filters.categories.includes(payload) ?
                {
                    ...state, filters: { ...filters, categories: filters.categories.filter(item => item !== payload) }
                } :
                {
                    ...state, filters: { ...filters, categories: [...filters.categories, payload] }
                }
        case "RATINGS":
            return {
                ...state, filters: { ...filters, rating: payload }
            }
        case "IS_INSTOCK":
            return {
                ...state, filters: { ...filters, includeOutOfStock: !filters.includeOutOfStock }
            }
        case "PRICE_RANGE":
            return {
                ...state, filters: { ...filters, priceRange: payload }
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: initialState.filters
            }
        case "INITIALIZE_CART":
            return {
                ...state, cart: payload
            }
        case "ADD_ITEM_TO_CART":
            return {
                ...state, cart: payload
            }
        case "DELETE_FROM_CART":
            return {
                ...state, cart: payload
            }
        case "INCREMENT_QTY":
            return {
                ...state, cart: payload
            }
        case "DECREMENT_QTY":
            return {
                ...state, cart: payload
            }
        case "INITIALIZE_WISHLIST":
            return {
                ...state, wishList: payload
            }
        case "ADD_TO_WISHLIST":
            return {
                ...state, wishList: payload
            }
        case "TOGGLE_WISHLIST":
            return {
                ...state, wishList: payload
            }
        default:
            return state
    }
}

export { reducerFunc };