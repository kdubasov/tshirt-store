import {realtimeDB} from "../../../database/firebase-connect";
import {set,ref} from "firebase/database";
import {getDate} from "../../../general-functions/getDate.js";

export const handleAddCategory = (data) =>{

    return set(ref(realtimeDB, `/categories/${data.link}`),{
        ...data,
        date: getDate(Date.now()),
        dateNoRedact: Date.now(),
    })
};
