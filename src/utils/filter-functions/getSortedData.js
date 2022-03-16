export const getSortedData = (data, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
        return [...data].sort((a, b) => b.price.discountedPrice - a.price.discountedPrice);
    }
    else if (sortBy === "LOW_TO_HIGH") {
        return [...data].sort((a, b) => a.price.discountedPrice - b.price.discountedPrice);
    }
    else {
        return data
    }
}