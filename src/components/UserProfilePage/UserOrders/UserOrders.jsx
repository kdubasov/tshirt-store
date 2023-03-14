import React from 'react';
import "./UserOrders.css";
import {Badge} from "react-bootstrap";
import {useGetUserOrder} from "../../../pages-hooks/ProductPage/orders/useGetUserOrder.js";
import UoOrderCard from "./components/UOOrderCard/UOOrderCard.jsx";

const UserOrders = () => {

    const dataOrders = useGetUserOrder();
    // console.log(dataOrders);

    //check orders length
    if (!dataOrders.length) return;

    return (
        <div className={"UserOrders"}>
            <Badge>Мои заказы</Badge>

            {
                dataOrders.map(elem => (
                    <UoOrderCard key={elem.databaseURL} data={elem} />
                ))
            }
        </div>
    );
};

export default UserOrders;
