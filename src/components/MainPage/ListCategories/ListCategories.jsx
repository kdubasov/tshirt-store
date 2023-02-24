import React from 'react';
import {useGetAllCategories} from "../../../pages-hooks/AdminPage/Categories/useGetAllCategories.js";
import {Badge, ListGroup} from "react-bootstrap";
import LCItem from "./components/LCItem/LCItem.jsx";

const ListCategories = () => {

    //all categories list
    const data = useGetAllCategories();
    // console.log(data);

    return (
        <div className={"ListCategories"}>
            <Badge className={"mb-2"}>Категории</Badge>

            <ListGroup>
                {
                    data.map(elem => (
                        <LCItem key={elem.link} data={elem} />
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default ListCategories;
