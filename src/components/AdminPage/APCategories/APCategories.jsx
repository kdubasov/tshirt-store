import React from 'react';
import {Badge} from "react-bootstrap";
import APCAdd from "./APCAdd/APCAdd.jsx";

const APCategories = () => {
    return (
        <div className={"APCategories"}>
            <h5><Badge>Категории</Badge></h5>
            <APCAdd />
        </div>
    );
};

export default APCategories;
