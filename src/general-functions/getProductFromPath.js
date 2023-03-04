export const getProductFromPath = path => {
    const arr = path.split("/");
    return {
        category: arr.at(2),
        product: arr.at(-1),
    }
}