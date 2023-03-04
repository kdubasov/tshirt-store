import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {NT_ADD_PRODUCT_ERROR_INPUTS} from "../../../constants/notes/products.js";

export const checkProductInputs = (data, dispatch) => {
    //проверка на все заполненные поля для товара
    if (
        data.colors === [] ||
        data.delivery === [] ||
        data.images === [] ||
        data.pay === [] ||
        data.sizes === [] ||
        data.gender === [] ||
        !data.category
    ){
        dispatch(setNote(NT_ADD_PRODUCT_ERROR_INPUTS))
        handleClearNotes(dispatch,6)
        return false;
    }else {
        return true;
    }
}