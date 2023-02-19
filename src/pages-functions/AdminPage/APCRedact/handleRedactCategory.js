import {ref, update} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect";

export const handleRedactCategory = (e,data) =>{
    e.preventDefault();

    const url = `/categories/${data.link}`;

    return update(ref(realtimeDB, url),{
        title: data.title,
        description: data.description,
        photo: data.photo,
    })
}