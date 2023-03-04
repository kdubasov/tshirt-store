import React from 'react';
import {ListGroupItem} from "react-bootstrap";
import "./LCItem.css";
import {Link} from "react-router-dom";
import {LINK_CATEGORY_PAGE_FNC} from "../../../../../constants/links.js";

const LCItem = ({data}) => {
    return (
        <ListGroupItem className={"LCItem"}>
            <Link to={LINK_CATEGORY_PAGE_FNC(data.link)}>
                <h6>{data.title}</h6>
            </Link>
            <small className={"date"}>{data.date}</small>
        </ListGroupItem>
    );
};

export default LCItem;
