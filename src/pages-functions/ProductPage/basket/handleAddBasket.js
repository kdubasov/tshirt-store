import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect.js";
import {LINK_BASKET_PAGE} from "../../../constants/links.js";
import {getDate} from "../../../general-functions/getDate.js";

export const handleAddBasket = data => {
    const databaseURL = `${LINK_BASKET_PAGE}/${data.user.uid}/${data.product.id}`;

    return set(ref(realtimeDB, databaseURL),{
        ...data,
        user: {
            uid: data.user.uid,
            email: data.user.email,
        },
        title: data.product.title,
        amount: 1,
        dateNoRedact: Date.now(),
        date: getDate(Date.now()),
        databaseURL: databaseURL,
    })
}