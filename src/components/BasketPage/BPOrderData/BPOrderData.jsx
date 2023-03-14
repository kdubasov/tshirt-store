import React from 'react';
import "./BPOrderData.css";
import {getCutWord} from "../../../general-functions/getCutWord.js";
import {getSalePrice} from "../../../general-functions/getSalePrice.js";
import {Badge, Button} from "react-bootstrap";
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";
import {getTotalPrice} from "../../../pages-functions/ProductPage/basket/getTotalPrice.js";
import {Link} from "react-router-dom";
import {LINK_ORDER_PAGE} from "../../../constants/links.js";
import {checkAdmin} from "../../../pages-functions/AdminPage/checkAdmin.js";

const BPOrderData = ({basketData,showButton}) => {

    const { user } = useUserAuth();
    const admin = checkAdmin(user);

    // console.log(basketData,"BPOrderData");

    if (!basketData.length){
        return (
            <div className={"BPOrderData"}>
                <div className="products">
                    <h5>Товары:</h5>
                    <p>Товары не добавлены!</p>
                </div>
                <div className="price">
                    <h5>Итоговая цена:</h5>
                    <p>0₽</p>
                </div>
            </div>
        );
    }

    //"/categories/unisex/products/product-1678022006562"

    return (
        <div className={"BPOrderData"}>
            <div className="products">
                <h5>Товары: (с учетом скидки)</h5>
                <div>
                    {
                        basketData.map(elem => (
                            <p key={elem.product.id} className={"product-text"}>
                                {
                                    admin ?
                                        <Link to={elem.product.databaseURL}>
                                            {elem.title} ({elem.amount}шт)
                                        </Link>:
                                        <>{getCutWord(elem.title,18)} ({elem.amount}шт)</>
                                }
                                <b>{getSalePrice(elem.product.price,elem.product.sale)}₽</b>
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="sale">
                <h5>Итоговая скидка:</h5>
                <Badge>{getTotalPrice(basketData).sale}₽</Badge>
            </div>
            <div className="price">
                <h5>Итоговая цена:</h5>
                <Badge>{getTotalPrice(basketData).price}₽</Badge>
            </div>

            {
                showButton &&
                (
                    user.emailVerified ?
                        <Link to={LINK_ORDER_PAGE}>
                            <Button className={"w-100 mt-3"} size={"lg"}>
                                Оформить заказ
                            </Button>
                        </Link> :
                        <Button variant={"secondary"} disabled className={"w-100 mt-3"} size={"lg"}>
                            Подтвердите ваш email
                        </Button>
                )
            }
        </div>
    );
};

export default BPOrderData;
