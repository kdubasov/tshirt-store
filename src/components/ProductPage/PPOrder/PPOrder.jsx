import React, {useState} from 'react';
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";
import {PPSelectData} from "../data/PPSelectData.js";
import PPSelectValue from "../PPSelectValue/PPSelectValue.jsx";
import {Alert, Button} from "react-bootstrap";
import "./PPOrder.css";
import PpFavoritesButton from "../PPFavoritesButton/PPFavoritesButton.jsx";

const PPOrder = ({data}) => {

    // user data
    const { user } = useUserAuth();
    //data for order
    const [orderData, setOrderData] = useState({
        color:"",
        delivery:"",
        gender:"",
        pay:"",
        size:"",
        product: data,
        user: user,
    });
    // console.log(orderData,"PPOrder");

    //redact form data
    const handleChange = (input,value) => {
        const copy = Object.assign({},orderData);
        copy[input] = value;
        setOrderData(copy);
    }

    //если юзер не авторизован то показываем табличку
    if (!user){
        return (
            <div className={"PPOrder"}>
                <Alert variant={"danger"} className={"m-0 p-2 small"}>
                    Авторизуйтесь для возможности заказать товар
                </Alert>
            </div>
        )
    }

    return (
        <div className={"PPOrder"}>

            {//select value for order (set data in orderData)
                PPSelectData.map(elem => (
                    <PPSelectValue
                        key={elem.title}
                        title={elem.title}
                        input={elem.input}
                        data={data[elem.dataInput]}
                        orderData={orderData[elem.input]}
                        handleChange={handleChange}
                    />
                ))
            }

            <hr/>

            <div className="btn-container">
                <Button variant={"secondary"} size={"sm"}>
                    Добавить в корзину
                </Button>
                <PpFavoritesButton product={data} />
                <Button variant={"success"} className={"w-100"} size={"sm"}>
                    Оформить заказ
                </Button>
            </div>

        </div>
    );
};

export default PPOrder;
