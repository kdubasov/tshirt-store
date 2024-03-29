import {ref, update} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect";

export const handleCancelOrder = (data,hide) =>{

    return update(ref(realtimeDB, data.databaseURL),{
        ...data,
        status: 8,
        hide: hide,
    })
}
