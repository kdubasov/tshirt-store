import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {LINK_FAVORITES_PAGE} from "../../../constants/links.js";

//for get data from realtime database
export const useGetFavorites = userUid =>{

    const databaseUrl = LINK_FAVORITES_PAGE + "/" + userUid;
    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB, databaseUrl),snapshot => {

            const dataInner = snapshot.val();
            if (dataInner){
                setData(Object.values(dataInner))
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[])

    return data;
}
