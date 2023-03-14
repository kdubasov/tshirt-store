import React from 'react';
import "./UOOrderCard.css";
import {ORDER_STATUS} from "../../../../../constants/order.js";
import {Badge} from "react-bootstrap";
import BPOrderData from "../../../../BasketPage/BPOrderData/BPOrderData.jsx";
import UoCancelOrder from "../UOCancelOrder/UOCancelOrder.jsx";
import UoCanceledAlert from "../UOCanceledAlert/UOCanceledAlert.jsx";

const UoOrderCard = ({data}) => {

    const { address,comment,email,name,phoneNumber } = data.user;

    const getText = (text,value) => {
        if (!value) return false;
        return (
            <span>{text}: <b>{value}</b></span>
        );
    }

    //если заказ был отменен и скрыт то не показываем его
    if (data.hide) return;

    return (
        <div className={"UOOrderCard"}>

            {//смотрим стадию заказа если она подготовительная то можем отменить
                data.status < 3 &&
                <UoCancelOrder data={data} />
            }

            {/*если заказ был отменен то показываем табличку что он был отменен*/}
            <UoCanceledAlert data={data} />

            <p className={"text-container"}>
                {getText("Дата",data.date)}
                {getText("Статус",ORDER_STATUS[data.status])}
            </p>

            <div className="user-data">
                <Badge>User data</Badge>
                <p className={"text-container"}>
                    {getText("Имя и фамилия",name)}
                    {getText("Email",email)}
                    {getText("Адрес",address)}
                    {getText("Телефон",phoneNumber)}
                    {getText("Комментарий",comment)}
                </p>
            </div>

            <div className="products">
                <BPOrderData basketData={data.products} />
            </div>
        </div>
    );
};

export default UoOrderCard;
