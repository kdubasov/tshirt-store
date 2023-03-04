import {realtimeDB} from "../../../database/firebase-connect";
import {set,ref} from "firebase/database";
import {getDate} from "../../../general-functions/getDate.js";

export const handleAddCategory = data => {

    const databaseURL = `/categories/${data.link}`;

    return set(ref(realtimeDB, databaseURL),{
        ...data,
        date: getDate(Date.now()),
        dateNoRedact: Date.now(),
        databaseURL: databaseURL,
    })
};
