import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {LINK_BASKET_PAGE} from "../../../constants/links.js";

//for get data from realtime database
export const useGetBasket = userUid =>{

    const databaseUrl = LINK_BASKET_PAGE + "/" + userUid;
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