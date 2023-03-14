import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect.js";
import {LINK_ORDER_PAGE} from "../../../constants/links.js";
import {getDate} from "../../../general-functions/getDate.js";

export const handleAddOrder = data => {
    const databaseURL = `${LINK_ORDER_PAGE}/${data.user.uid}/${Date.now()}`;

    return set(ref(realtimeDB, databaseURL), {
        ...data,
        status: 0,
        date: getDate(Date.now()),
        dateNoRedact: Date.now(),
        databaseURL: databaseURL,
    })
}
