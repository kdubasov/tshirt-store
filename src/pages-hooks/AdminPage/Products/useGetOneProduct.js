import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {LINK_PRODUCT_PAGE_FNC} from "../../../constants/links.js";

//for get data from realtime database
export const useGetOneProduct = productData => {

    const databaseUrl = LINK_PRODUCT_PAGE_FNC(productData.category, productData.product);
    const [data,setData] = useState({})

    useEffect(() =>{
        onValue(ref(realtimeDB, databaseUrl),snapshot => {
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