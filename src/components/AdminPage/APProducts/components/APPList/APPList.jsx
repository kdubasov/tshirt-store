import React, {useEffect, useState} from 'react';
import "./APPList.css";
import {useGetAllProducts} from "../../../../../pages-hooks/AdminPage/Products/useGetAllProducts.js";
import {Badge, FormControl} from "react-bootstrap";
import APPLItem from "./components/APPLItem/APPLItem.jsx";

const APPList = () => {

    //список всех товаров
    const data = useGetAllProducts();
    const [dataSorted, setDataSorted] = useState([]);
    // console.log(data);

    //запрос при поиске
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (query){//чтобы показывались только те которые содержат в себе запрос
            setDataSorted(data.filter(elem => elem.title.toLowerCase().includes(query.toLowerCase())))
        }
    },[query])

    return (
        <div className={"APPList"}>
            <Badge className={"w-100 mb-1"} bg={"success"}>
                Список товаров ({data.length})
            </Badge>

            {//поиск по товарам
                Boolean(data.length) &&
                <FormControl
                    className={"APPSearch mb-1"}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder={"Поиск по товарам..."}
                />
            }

            {//check categories length for text about no data
                !data.length &&
                <h6 className={"fw-bold text-muted text-center"}>
                    Список товаров пуст
                </h6>
            }

            {
                Boolean(data.length) &&
                <div className="content">
                    {
                        (query ? dataSorted : data).map(elem => (
                            <APPLItem key={elem.id} data={elem} />
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default APPList;
