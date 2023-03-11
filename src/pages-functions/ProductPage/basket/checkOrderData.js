export const checkOrderData = orderData => {
    const arr = Object.values(orderData);
    // console.log(arr);

    for (let elem of arr) {
        if (!elem) return false;
    }
    return true;
}