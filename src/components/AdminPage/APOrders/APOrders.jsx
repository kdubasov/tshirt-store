import React from 'react';
import {Badge} from "react-bootstrap";
import "./APOrders.css";
import UoOrderCard from "../../UserProfilePage/UserOrders/components/UOOrderCard/UOOrderCard.jsx";
import {useGetAllOrders} from "../../../pages-hooks/ProductPage/orders/useGetAllOrders.js";

const APOrders = () => {

    const dataOrders = useGetAllOrders();
    // console.log(dataOrders,"APOrders");

    if (!dataOrders.length){
        return (
            <div className={"APOrders"}>
                <h5 className={"w-100"}><Badge>Список заказов</Badge></h5>
                <h6 className={"fw-bold text-muted text-center"}>
                    Список заказов пуст
                </h6>
            </div>
        );
    }

    return (
        <div className={"APOrders"}>
            <h5 className={"w-100"}><Badge>Список заказов</Badge></h5>

            <div className="content">
                {
                    dataOrders.map(elem => (
                        <UoOrderCard key={elem.databaseURL} data={elem} />
                    ))
                }
            </div>
        </div>
    );
};

export default APOrders;
