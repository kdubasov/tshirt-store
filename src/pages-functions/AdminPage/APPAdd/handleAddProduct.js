import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect.js";
import {getDate} from "../../../general-functions/getDate.js";
import {handleAddImages} from "./handleAddImages.js";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {NT_ADD_PRODUCT, NT_ADD_PRODUCT_ERROR} from "../../../constants/notes/products.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {LINK_PRODUCT_PAGE_FNC} from "../../../constants/links.js";

export const handleAddProduct = (data, dispatch, navigate) => {

    const productId = `product-${Date.now()}`;
    const databaseURL = `/categories/${data.category}/products/${productId}`;

    set(ref(realtimeDB, databaseURL),{
        ...data,
        id: productId,
        date: getDate(Date.now()),
        dateNoRedact: Date.now(),
        databaseURL: databaseURL,
        //наличие
        availability: true,
        //скрыть
        hide: false,
    })
        .then(() => handleAddImages(data, productId))
        .then(() => {
            dispatch(setNote(NT_ADD_PRODUCT))
            navigate(LINK_PRODUCT_PAGE_FNC(data.category,productId))
        })
        .catch(error => dispatch(setNote(NT_ADD_PRODUCT_ERROR(error.message))))
        .finally(() => handleClearNotes(dispatch))
}