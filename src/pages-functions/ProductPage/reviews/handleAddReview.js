import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect.js";
import {getDate} from "../../../general-functions/getDate.js";


export const handleAddReview = data => {

    return set(ref(realtimeDB, data.databaseURL), {
        ...data,
        date: getDate(Date.now()),
        dateNoRedact: Date.now(),
        title: "Отзыв",
    })
}