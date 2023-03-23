import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Toast} from "react-bootstrap";
import "./NotesAlert.css";
import {clearNote} from "../../redux-store/slices/notificationsSlice.js";
import {getDate} from "../../general-functions/getDate.js";

const NotesAlert = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.notifications.data);
    // console.log(data,"NotesAlert");

    if (data.length)
    return (
        <div className={"NotesAlert"}>
            {
                data.map((elem,idx) => (
                    <Toast
                        key={idx}
                        className={"note"}
                        show={elem["show"]}
                        onClose={() => dispatch(clearNote())}
                    >
                        <Toast.Header>
                            <div className={`variant-block ${elem["variant"]}`} />
                            <strong className="me-auto">
                                {elem["title"]}
                            </strong>
                            <small className="text-muted">
                                {getDate(Date.now())}
                            </small>
                        </Toast.Header>
                        <Toast.Body>
                            {elem["text"]}
                        </Toast.Body>
                    </Toast>
                ))
            }
        </div>
    );
};

export default NotesAlert;
