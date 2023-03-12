export const getSalePrice = (price,sale) => {
    if (!price || !sale) return price;

    return (+price - (+price / 100 * +sale)).toFixed(2);
}