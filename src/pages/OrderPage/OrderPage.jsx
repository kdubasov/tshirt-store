import React from 'react';
import {Badge, Container} from "react-bootstrap";
import {useGetBasket} from "../../pages-hooks/ProductPage/basket/useGetBasket.js";
import BPOrderData from "../../components/BasketPage/BPOrderData/BPOrderData.jsx";
import "./OrderPage.css";
import OpForm from "../../components/OrderPage/OPForm/OPForm.jsx";
import {Link} from "react-router-dom";
import {LINK_CATEGORIES} from "../../constants/links.js";

const OrderPage = () => {

    //корзина
    const basketData = useGetBasket();

    //если корзина пуста то выводим это
    if (!basketData.length){
        return (
            <Container className={"OrderPage py-3"}>
                <Badge>Оформление заказа</Badge>
                <p className={"m-0"}>
                    Ваша корзина пуста поэтому вы не можете оформить заказ!
                </p>
                <Link to={LINK_CATEGORIES}>К категориям</Link>
            </Container>
        )
    }

    return (
        <Container className={"OrderPage py-3"}>
            <Badge>Оформление заказа</Badge>
            <p>
                Вы должны заполнить дополнительные данные для того чтобы отправить нам заказ. <br/>
                Заказ отобразится у вас в профиле и вы сожете следить за его статусом. <br/>
                В кратчайшие сроки с вами свяжутся наши администраторы и уточнят некоторые детали.
            </p>

            <div className="content">
                <div className="form-container">
                    <OpForm basketData={basketData} />
                </div>

                <div className="order-container">
                    <BPOrderData basketData={basketData} />
                </div>
            </div>

        </Container>
    );
};

export default OrderPage;
