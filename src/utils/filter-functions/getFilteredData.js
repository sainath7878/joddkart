export const getFilteredData = (data, filters) => {
    let filteredData = [...data];
    if (filters.categories.length !== 0) {
        filteredData = filteredData.filter(item => filters.categories.includes(item.category))
    }
    if (filters.rating) {
        filteredData = filteredData.filter(item => item.rating > filters.rating);
    }
    if (filters.includeOutOfStock) {
        filteredData = filteredData.filter(item => item.inStock)
    }
    if (filters.priceRange) {
        filteredData = filteredData.filter(item => item.price.discountedPrice < filters.priceRange)
    }
    return filteredData;
}