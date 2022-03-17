export const getSortedData = (data, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
        return [...data].sort((a, b) => b.price.discounted - a.price.discounted);
    }
    else if (sortBy === "LOW_TO_HIGH") {
        return [...data].sort((a, b) => a.price.discounted - b.price.discounted);
    }
    else {
        return data
    }
}