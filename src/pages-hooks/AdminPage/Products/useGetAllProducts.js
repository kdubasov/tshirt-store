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
                setData([])
                // eslint-disable-next-line
                const categories = Object.values(dataInner)
                for (let categ of categories){
                    const products = categ["products"];
                    if (products){
                        for (let product of Object.values(products)){
                            setData(old => [...old, product])
                        }
                    }
                }
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[])

    return data;
}