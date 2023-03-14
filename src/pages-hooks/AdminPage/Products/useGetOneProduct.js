import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";

//for get data from realtime database
export const useGetOneProduct = productLink => {

    const [data,setData] = useState({})

    useEffect(() =>{
        onValue(ref(realtimeDB, productLink),snapshot => {
            const dataInner = snapshot.val();
            if (dataInner){
                setData(dataInner)
            }else {
                return {}
            }
        })
        // eslint-disable-next-line
    },[])

    return data;
}