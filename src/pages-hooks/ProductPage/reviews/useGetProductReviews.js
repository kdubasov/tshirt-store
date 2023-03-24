import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";

//for get data from realtime database
export const useGetProductReviews = product => {

    const databaseURL = product.databaseURL + "/reviews";
    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB, databaseURL),snapshot => {
            const dataInner = snapshot.val();
            if (dataInner){
                setData(Object.values(dataInner))
            }else {
                return []
            }
        })
    },[product.id])

    return data;
}