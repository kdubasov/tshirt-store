import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {LINK_BASKET_PAGE} from "../../../constants/links.js";
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";

//for get data from realtime database
export const useGetBasket = () =>{

    const { user } = useUserAuth();
    const databaseUrl = LINK_BASKET_PAGE + "/" + user.uid;
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
    },[user.uid])

    return data;
}