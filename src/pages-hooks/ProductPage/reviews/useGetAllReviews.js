import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {LINK_CATEGORIES} from "../../../constants/links.js";

//for get data from realtime database
export const useGetAllReviews = () => {

    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB, LINK_CATEGORIES),snapshot => {
            const dataInner = snapshot.val();
            if (dataInner){
                setData([])
                for (let categ of Object.values(dataInner)){
                    if (categ.products){
                        for (let prod of Object.values(categ.products)){
                            if (prod["reviews"]){
                                setData(old => [...old,...Object.values(prod["reviews"])])
                            }
                        }
                    }
                }
            }else {
                return []
            }
        })
    },[])

    return data;
}