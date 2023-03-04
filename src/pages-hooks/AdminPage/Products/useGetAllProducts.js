import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";

//for get data from realtime database
export const useGetAllProducts = () =>{

    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB, "/categories"),snapshot => {

            const dataInner = snapshot.val();
            // console.log(dataInner);
            if (dataInner){
                // eslint-disable-next-line
                console.log(dataInner)
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[])

    return data;
}