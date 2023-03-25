
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {realtimeDB} from "../../database/firebase-connect.js";

//for get data from realtime database
export const useGetFeedback = () => {

    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB, "/feedback"),snapshot => {
            setData([])
            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                // eslint-disable-next-line
                setData(Object.values(dataInner))
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[])

    return data;
}