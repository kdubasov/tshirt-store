import React from 'react';
import {Badge} from "react-bootstrap";
import APCAdd from "./components/APCAdd/APCAdd.jsx";
import APCList from "./components/APCList/APCList.jsx";
import "./APCategories.css";

const APCategories = () => {
    return (
        <div className={"APCategories"}>
            <h5 className={"w-100"}><Badge>Категории</Badge></h5>
            <APCAdd />
            <APCList />
        </div>
    );
};

export default APCategories;
