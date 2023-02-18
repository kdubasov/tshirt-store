import {realtimeDB} from "../../../database/firebase-connect";
import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";

//for get data from realtime database
export const useGetAllCategories = () =>{

    const [data,setData] = useState([])

    useEffect(() =>{
        onValue(ref(realtimeDB, "/categories"),snapshot => {
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

    return data
}