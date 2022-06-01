const getSearchedData = (products, search) => {
    if (search === "") {
        return products;
    }
    else {
        return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()))
    }
}

export { getSearchedData };