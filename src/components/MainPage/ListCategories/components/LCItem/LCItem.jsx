import React from 'react';
import {ListGroupItem} from "react-bootstrap";
import "./LCItem.css";

const LCItem = ({data}) => {
    return (
        <ListGroupItem className={"LCItem"}>
            <h6>{data.title}</h6>
            <small className={"date"}>{data.date}</small>
        </ListGroupItem>
    );
};

export default LCItem;
