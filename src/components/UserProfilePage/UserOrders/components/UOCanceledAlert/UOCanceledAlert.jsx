import React from 'react';
import {Alert, Button} from "react-bootstrap";
import {handleCancelOrder} from "../../../../../pages-functions/ProductPage/order/handleCancelOrder.js";

const UoCanceledAlert = ({data}) => {

    //если заказ был отменен то показываем табличку что он был отменен

    const handleCancel = () => {
        handleCancelOrder(data, true).then(console.log)
    }

    if (data.status === 8)
    return (
        <Alert variant={"danger"} className={"small p-2"}>
            Данный заказ был отменен. <br/>
            <Button onClick={handleCancel} size={"sm"}>
                Скрыть заказ
            </Button>
        </Alert>
    );
};

export default UoCanceledAlert;
