import React, {useState} from 'react';
import {handleDeleteRealtime} from "../../../../../general-functions/firebase-functions/handleDeleteRealtime.js";
import {setNote} from "../../../../../redux-store/slices/notificationsSlice.js";
import {NT_DELETE, NT_DELETE_ERROR} from "../../../../../constants/notes/general.js";
import {handleClearNotes} from "../../../../../general-functions/redux-functions/handleClearNotes.js";
import {useDispatch} from "react-redux";
import {Button} from "react-bootstrap";

const BPPDelete = ({databaseURL}) => {

    const dispatch = useDispatch();
    const [deleted, setDeleted] = useState(false);

    //delete from basket
    const handleDelete = () => {
        handleDeleteRealtime(databaseURL)
            .then(() => {
                setDeleted(true)
                dispatch(setNote(NT_DELETE))
            })
            .catch(() => dispatch(setNote(NT_DELETE_ERROR)))
            .finally(() => handleClearNotes(dispatch,3))
    }

    return (
        <div className={"BPPDelete"}>
            {
                deleted ?
                    <Button size={"sm"} disabled variant={"success"}>
                        Удалено!
                    </Button>:
                    <Button onClick={handleDelete} size={"sm"} variant={"danger"}>
                        Удалить из корзины
                    </Button>
            }
        </div>
    );
};

export default BPPDelete;
