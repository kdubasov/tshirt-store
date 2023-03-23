import React, {useState} from 'react';
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
    const [deleted, setDeleted] = useState(false);

    //products in favorites
    const products = useGetFavorites();
    // console.log(products,"products in favorites");

    //add
    const handleAdd = () => {
        handleAddFavorites(user, product)
            .then(() => dispatch(setNote(NT_FAVORITE_PRODUCT_ADD)))
            .catch(() => dispatch(setNote(NT_FAVORITE_PRODUCT_ADD_ERROR)))
            .finally(() => handleClearNotes(dispatch,5))
    }

    //delete
    const handleDelete = () => {
        handleDeleteRealtime(LINK_FAVORITES_PAGE + "/" + user.uid + "/" + product.id)
            .then(() => {
                setDeleted(true)
                dispatch(setNote(NT_DELETE))
            })
            .catch(() => dispatch(setNote(NT_DELETE_ERROR)))
            .finally(() => handleClearNotes(dispatch,5))
    }

    //if product in favorites return false error return true
    const checkAdded = () => {
        for (let elem of products){
            if (elem.id === product.id) return false;
        }
        return true;
    }


    //check user
    if (!user) return;

    //jsx

    //если товар был только чт удален
    if (deleted) {
        return (
            <Button variant={"success"} disabled size={"sm"}>
                Удалено!
            </Button>
        )
    }

    //если товар не добавлен в корзину
    if (checkAdded()){
        return (
            <Button variant={"warning"} size={"sm"} onClick={handleAdd}>
                В избранное
            </Button>
        )
    }

    //если товар уже есть в корзине
    return (
        <Button variant={"danger"} size={"sm"} onClick={handleDelete}>
            Удалить из избранного
        </Button>
    );
};

export default PpFavoritesButton;
