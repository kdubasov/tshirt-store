import React from 'react';
import "./BPProductCard.css";
import {Badge, Card} from "react-bootstrap";
import PCSlider from "../../../general-components/ProductCard/components/PCSlider/PCSlider.jsx";
import {Link} from "react-router-dom";
import {LINK_PRODUCT_PAGE_FNC} from "../../../constants/links.js";
import BPPAmount from "./components/BPPAmount/BPPAmount.jsx";
import BPPDelete from "./components/BPPDelete/BPPDelete.jsx";

const BPProductCard = ({data}) => {

    const { product, amount, pay, gender, color, delivery, size, databaseURL } = data;

    return (
        <Card className={"BPProductCard"}>
            <PCSlider productId={product.id} />

            <div className="content">
                <div className="info">
                    <Link to={LINK_PRODUCT_PAGE_FNC(product.category, product.id)}>
                        <h6 className={"m-0"}>{product.title}</h6>
                    </Link>
                    <h4 className={"price"}>
                        {product.price * amount}₽
                        {product.sale && <Badge>-{product.sale}%</Badge>}
                    </h4>
                    <p className="small m-0">
                        Цвет: <b>{color}</b> <br/>
                        Доставка: <b>{delivery}</b> <br/>
                        Пол: <b>{gender}</b> <br/>
                        Оплата: <b>{pay}</b> <br/>
                        Размер: <b>{size}</b>
                    </p>

                    {/*delete product*/}
                    <BPPDelete databaseURL={databaseURL} />
                </div>

                <BPPAmount data={data} />
            </div>
        </Card>
    );
};

export default BPProductCard;
