import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";

//for get data from realtime database
export const useGetCategoryProducts = categoryLink =>{

    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB, categoryLink),snapshot => {

            const dataInner = snapshot.val();
            if (dataInner){
                setData(Object.values(dataInner))
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[categoryLink])

    return data;
}