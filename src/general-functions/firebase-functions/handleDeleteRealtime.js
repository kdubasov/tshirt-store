import {remove,ref} from 'firebase/database'
import {realtimeDB} from "../../database/firebase-connect.js";

export const handleDeleteRealtime = url => {
    return remove(ref(realtimeDB,url))
}