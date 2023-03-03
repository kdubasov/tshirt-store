import {setNote} from "../../redux-store/slices/notificationsSlice.js";
import {NT_AUTH_SIGNUP_PASS_CHARS_ERROR, NT_AUTH_SIGNUP_PASS_ERROR} from "../../constants/notes/auth.js";
import {handleClearNotes} from "../redux-functions/handleClearNotes.js";

export const checkPassword = (dispatch, pass, passConfirm) => {

    if (!pass || !passConfirm) return false;

    //check password confirm
    if (pass !== passConfirm){
        dispatch(setNote(NT_AUTH_SIGNUP_PASS_ERROR))
        handleClearNotes(dispatch,3)
        return false;
    }
    //check password length
    if (pass.length < 8){
        dispatch(setNote(NT_AUTH_SIGNUP_PASS_CHARS_ERROR))
        handleClearNotes(dispatch,3)
        return false;
    }

    return true;
}