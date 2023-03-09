import React from 'react';
import {Button} from "react-bootstrap";
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";
import {handleAddFavorites} from "../../../pages-functions/ProductPage/favorites/handleAddFavorites.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {NT_FAVORITE_PRODUCT_ADD, NT_FAVORITE_PRODUCT_ADD_ERROR} from "../../../constants/notes/products.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {useGetFavorites} from "../../../pages-hooks/ProductPage/favorites/useGetFavorites.js";
import {handleDeleteRealtime} from "../../../general-functions/firebase-functions/handleDeleteRealtime.js";
import {NT_DELETE, NT_DELETE_ERROR} from "../../../constants/notes/general.js";
import {LINK_FAVORITES_PAGE} from "../../../constants/links.js";

const PpFavoritesButton = ({product}) => {

    const { user } = useUserAuth();
    const dispatch = useDispatch();

    //products in favorites
    const products = useGetFavorites(user.uid);

    //add
    const handleAdd = () => {
        handleAddFavorites(user, product)
            .then(() => dispatch(setNote(NT_FAVORITE_PRODUCT_ADD)))
            .catch(() => dispatch(setNote(NT_FAVORITE_PRODUCT_ADD_ERROR)))
            .finally(() => handleClearNotes(dispatch,3))
    }

    //delete
    const handleDelete = () => {
        handleDeleteRealtime(LINK_FAVORITES_PAGE + "/" + user.uid + "/" + product.id)
            .then(() => dispatch(setNote(NT_DELETE)))
            .catch(() => dispatch(setNote(NT_DELETE_ERROR)))
            .finally(() => handleClearNotes(dispatch,3))
    }

    //if product in favorites return false error return true
    const checkAdded = () => {
        if (!products.length) return true;
        return !products.filter(elem => elem.id === product.id).length;
    }


    //jsx
    if (checkAdded()){
        return (
            <Button variant={"warning"} size={"sm"} onClick={handleAdd}>
                В избранное
            </Button>
        )
    }else {
        return (
            <Button variant={"danger"} size={"sm"} onClick={handleDelete}>
                Удалить из избранного
            </Button>
        );
    }
};

export default PpFavoritesButton;
