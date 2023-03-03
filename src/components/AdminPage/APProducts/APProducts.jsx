import React from 'react';
import {Badge} from "react-bootstrap";
import "./APProducts.css";
import APPAdd from "./components/APPAdd/APPAdd.jsx";

const APProducts = () => {
    return (
        <div className={"APProducts"}>
            <h5 className={"w-100"}><Badge>Товары</Badge></h5>

            <APPAdd />
        </div>
    );
};

export default APProducts;
