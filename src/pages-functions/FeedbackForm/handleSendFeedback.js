import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect.js";
import {getDate} from "../../general-functions/getDate.js";


export const handleAddBasket = data => {

    const date = Date.now();
    const databaseURL = `/feedback/message-${date}`;

    return set(ref(realtimeDB, databaseURL),{
        ...data,
        databaseURL: databaseURL,
        dateNoRedact: date,
        date: getDate(date),
    })
}