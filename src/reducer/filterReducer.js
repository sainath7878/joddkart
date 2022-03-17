export const initialState = {
    allProducts: [],
    loader: false,
    filters: {
        sortBy: "",
        categories: [],
        includeOutOfStock: false,
        rating: null,
        priceRange: 2000
    }
}

const reducerFunc = (state, action) => {
    const { filters } = state
    switch (action.type) {
        case "INITIALIZE_PRODUCTS":
            return {
                ...state, allProducts: action.payload
            }
        case "LOADER":
            return {
                ...state, loader: action.payload
            }
        case "PRODUCTS_WITH_CATEGORIES":
            return {
                ...state, filters: {...filters, categories: filters.categories.concat(action.payload)}
            }

        case "SORT_BY":
            return {
                ...state, filters: { ...filters, sortBy: action.payload }
            }
        case "CATEGORIES":
            return state.filters.categories.includes(action.payload) ?
                {
                    ...state, filters: { ...filters, categories: filters.categories.filter(item => item !== action.payload) }
                } :
                {
                    ...state, filters: { ...filters, categories: [...filters.categories, action.payload] }
                }
        case "RATINGS":
            return {
                ...state, filters: { ...filters, rating: action.payload }
            }
        case "IS_INSTOCK":
            return {
                ...state, filters: { ...filters, includeOutOfStock: !filters.includeOutOfStock }
            }
        case "PRICE_RANGE":
            return {
                ...state, filters: { ...filters, priceRange: action.payload }
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

export { reducerFunc };