import {ref, update} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect";
import {getDate} from "../../../general-functions/getDate.js";

export const handleRedactProduct = data => {

    return update(ref(realtimeDB, data.databaseURL),{
        ...data,
        dateRedact:getDate(Date.now()),
    })
}
