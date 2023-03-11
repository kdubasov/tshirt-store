import React from 'react';
import {useSelector} from "react-redux";
import {Alert} from "react-bootstrap";
import "./NotesAlert.css";

const NotesAlert = () => {

    const data = useSelector(state => state.notifications.data);
    // console.log(data,"NotesAlert");

    if(data["show"])
    return (
        <Alert className={"NotesAlert"} variant={data["variant"]}>
            <h6>{data["title"]}</h6>
            <p className={"small"}>
                {data["text"]}
            </p>
        </Alert>
    );
};

export default NotesAlert;
