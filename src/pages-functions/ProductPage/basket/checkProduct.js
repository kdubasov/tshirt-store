export const checkProduct = (productId, basketData) => {
    for (let elem of basketData) {
        if (elem.product.id === productId) {
            return true;
        }
    }
    return false;
}