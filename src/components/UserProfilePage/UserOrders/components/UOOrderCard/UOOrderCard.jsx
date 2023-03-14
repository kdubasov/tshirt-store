import React from 'react';
import "./UOOrderCard.css";
import {ORDER_STATUS} from "../../../../../constants/order.js";
import {Badge,Form} from "react-bootstrap";
import BPOrderData from "../../../../BasketPage/BPOrderData/BPOrderData.jsx";
import UoCancelOrder from "../UOCancelOrder/UOCancelOrder.jsx";
import UoCanceledAlert from "../UOCanceledAlert/UOCanceledAlert.jsx";
import {checkAdmin} from "../../../../../pages-functions/AdminPage/checkAdmin.js";
import {useUserAuth} from "../../../../../context-providers/AuthContextProvider.jsx";
import {handleChangeStatus} from "../../../../../pages-functions/AdminPage/APOrder/handleChangeStatus.js";

const UoOrderCard = ({data}) => {

    const { user } = useUserAuth();
    const admin = checkAdmin(user);
    const { address,comment,email,name,phoneNumber } = data.user;

    //get jsx block
    const getText = (text,value) => {
        if (!value) return false;
        return (
            <span>{text}: <b>{value}</b></span>
        );
    }

    const handleSetStatus = status => {
        handleChangeStatus(data,status).then(console.log)
    }

    //если заказ был отменен и скрыт то не показываем его
    if (data.hide && !admin) return;

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

            {//смена статуса для заказа (только для админа)
                admin &&
                <div className={"p-3 my-3 border border-5"}>
                    <label>Изменить статус заказа</label>
                    <Form.Select value={data.status} onChange={e => handleSetStatus(e.target.value)}>
                        {
                            Object.values(ORDER_STATUS).map((elem,ids) => (
                                <option key={ids} value={ids}>{ids}. {elem}</option>
                            ))
                        }
                    </Form.Select>
                </div>
            }

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
