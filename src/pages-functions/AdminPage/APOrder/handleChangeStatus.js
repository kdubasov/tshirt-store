import {ref, update} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect";

export const handleChangeStatus = (data,status) =>{

    return update(ref(realtimeDB, data.databaseURL),{
        ...data,
        status: status,
    })
}