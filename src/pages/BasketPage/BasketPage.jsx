import React from 'react';
import {Badge, Container} from "react-bootstrap";
import {useGetBasket} from "../../pages-hooks/ProductPage/basket/useGetBasket.js";
import BPProductCard from "../../components/BasketPage/BPProductCard/BPProductCard.jsx";
import "./BasketPage.css";
import BPOrderData from "../../components/BasketPage/BPOrderData/BPOrderData.jsx";

const BasketPage = () => {

    const basketData = useGetBasket();

    // jsx (if !products.length)
    if (!basketData.length){
        return (
            <Container className={"BasketPage py-3"}>
                <Badge>Корзина</Badge>
                <p className="opacity-75">
                    Корзина пуста
                </p>
            </Container>
        )
    }

    return (
        <Container className={"BasketPage py-3"}>
            <Badge>Корзина ({basketData.length})</Badge>

            <div className="content">
                <div className="products-container">
                    {
                        basketData.map(elem => (
                            <BPProductCard key={elem.product.id} data={elem} />
                        ))
                    }
                </div>

                <div className="order-container">
                    <BPOrderData basketData={basketData} />
                </div>
            </div>
        </Container>
    );
};

export default BasketPage;
