import React from 'react';
import "./APPList.css";
import {useGetAllProducts} from "../../../../../pages-hooks/AdminPage/Products/useGetAllProducts.js";
import {Badge} from "react-bootstrap";
import APPLItem from "./components/APPLItem/APPLItem.jsx";

const APPList = () => {

    const data = useGetAllProducts();
    console.log(data);


    return (
        <div className={"APPList"}>
            <Badge className={"w-100 mb-1"} bg={"success"}>
                Список товаров ({data.length})
            </Badge>

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
                        data.map(elem => (
                            <APPLItem key={elem.id} data={elem} />
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default APPList;
