//total price and sale for order
import {getSalePrice} from "../../../general-functions/getSalePrice.js";

export const getTotalPrice = (basketData) => {
    let price = 0;
    let sale = 0;
    for (let elem of basketData){
        const priceInner = +elem.product.price;
        const saleInner = +elem.product.sale;
        const priceSale = getSalePrice(priceInner,saleInner);
        price += +priceSale * elem.amount;
        sale += (priceInner - priceSale) * elem.amount;
    }

    return {
        price: price.toFixed(2),
        sale: sale.toFixed(2)
    };
}