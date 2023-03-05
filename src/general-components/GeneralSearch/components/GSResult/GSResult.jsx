import React from 'react';
import "./GSResult.css";
import {Link} from "react-router-dom";
import {LINK_CATEGORY_PAGE_FNC, LINK_PRODUCT_PAGE_FNC} from "../../../../constants/links.js";

const GSResult = ({products,categories}) => {

    return (
        <div className={"GSResult"}>
            <h5>Товары</h5>
            <div className="content">
                {
                    products.length ?
                        products.map(elem => (
                            <Link
                                className={"small"}
                                key={elem.id}
                                to={LINK_PRODUCT_PAGE_FNC(elem.category,elem.id)}
                            >
                                {elem.title}
                            </Link>
                        )):
                        <p className={"m-0 small opacity-50"}>
                            Товары по вашему запросу не найдены
                        </p>
                }
            </div>

            <hr/>

            <h5>Категории</h5>
            <div className="content">
                {
                    categories.length ?
                        categories.map(elem => (
                            <Link
                                className={"small"}
                                key={elem.link}
                                to={LINK_CATEGORY_PAGE_FNC(elem.link)}
                            >
                                {elem.title}
                            </Link>
                        )):
                        <p className={"m-0 small opacity-50"}>
                            Категории по вашему запросу не найдены
                        </p>
                }
            </div>
        </div>
    );
};

export default GSResult;
