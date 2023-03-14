import React, {useState} from 'react';
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";
import {PPSelectData} from "../data/PPSelectData.js";
import PPSelectValue from "../PPSelectValue/PPSelectValue.jsx";
import {Alert, Button} from "react-bootstrap";
import "./PPOrder.css";
import PpFavoritesButton from "../PPFavoritesButton/PPFavoritesButton.jsx";
import PPBasketButton from "../PPBasketButton/PPBasketButton.jsx";
import {Link} from "react-router-dom";
import {LINK_BASKET_PAGE} from "../../../constants/links.js";

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
            <Alert variant={"danger"} className={"m-0 p-2 small"}>
                Авторизуйтесь для возможности заказать товар
            </Alert>
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
                <PPBasketButton orderData={orderData} />
                <PpFavoritesButton product={data} />
                <Link className={"w-100"} to={LINK_BASKET_PAGE}>
                    <Button variant={"success"} className={"w-100"} size={"sm"}>
                        Оформить заказ
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default PPOrder;
