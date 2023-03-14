import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {LINK_ORDER_PAGE} from "../../../constants/links.js";

//for get data from realtime database
export const useGetAllOrders = () =>{

    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB, LINK_ORDER_PAGE),snapshot => {
            const dataInner = snapshot.val();
            if (dataInner){
                setData([])
                Object.values(dataInner).map(elem => {
                    setData(old => [...old, ...Object.values(elem)])
                })
            }else {
                return []
            }
        })
    },[])

    return data;
}