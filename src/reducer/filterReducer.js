export const initialState = {
    allProducts: [],
    loader: false,
    filters: {
        sortBy: "",
        categories: [],
        includeOutOfStock: false,
        rating: null,
        priceRange: 1000
    }
}

const reducerFunc = (state, action) => {
    switch (action.type) {
        case "INITIALIZE_PRODUCTS":
            return {
                ...state, allProducts: action.payload
            }
        case "LOADER":
            return {
                ...state, loader: action.payload
            }
        case "SORT_BY":
            return {
                ...state, filters: { ...state.filters, sortBy: action.payload }
            }
        case "CATEGORIES":
            return state.filters.categories.includes(action.payload) ?
                {
                    ...state, filters: { ...state.filters, categories: state.filters.categories.filter(item => item !== action.payload) }
                } :
                {
                    ...state, filters: { ...state.filters, categories: [...state.filters.categories, action.payload] }
                }
        case "RATINGS":
            return {
                ...state, filters: { ...state.filters, rating: action.payload }
            }
        case "IS_INSTOCK":
            return {
                ...state, filters: { ...state.filters, includeOutOfStock: !state.filters.includeOutOfStock }
            }
        case "PRICE_RANGE":
            return {
                ...state, filters:{...state.filters, priceRange: action.payload}
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: initialState.filters
            }
        default:
            return state
    }
}

export {reducerFunc};