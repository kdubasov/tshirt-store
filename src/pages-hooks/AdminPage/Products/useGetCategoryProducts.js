import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {LINK_CATEGORY_PAGE_FNC} from "../../../constants/links.js";

//for get data from realtime database
export const useGetCategoryProducts = categoryLink =>{

    const databaseUrl = LINK_CATEGORY_PAGE_FNC(categoryLink);
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