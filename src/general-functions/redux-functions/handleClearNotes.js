import {clearNote} from "../../redux-store/slices/notificationsSlice.js";

export const handleClearNotes = (dispatch, timeout = 5) => {
    return setTimeout(() => dispatch(clearNote()), timeout * 1000)
}