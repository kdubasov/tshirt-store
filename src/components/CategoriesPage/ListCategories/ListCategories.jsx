import React from 'react';
import {useGetAllCategories} from "../../../pages-hooks/AdminPage/Categories/useGetAllCategories.js";
import {ListGroup} from "react-bootstrap";
import LCItem from "./components/LCItem/LCItem.jsx";

const ListCategories = () => {

    //all categories list
    const data = useGetAllCategories();

    if (!data.length){
        return (
            <div className={"ListCategories"}>
                <h6>Список категорий пуст!</h6>
            </div>
        );
    }

    return (
        <div className={"ListCategories"}>
            <h6>Список всех категорий</h6>

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
