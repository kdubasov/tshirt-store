import React from 'react';
import {Button} from "react-bootstrap";
import {checkOrderData} from "../../../pages-functions/ProductPage/basket/checkOrderData.js";
import {handleAddBasket} from "../../../pages-functions/ProductPage/basket/handleAddBasket.js";
import {useDispatch} from "react-redux";
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {NT_BASKET_ADD, NT_BASKET_ADD_ERROR, NT_BASKET_ADD_ERROR_REQ} from "../../../constants/notes/products.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {useGetBasket} from "../../../pages-hooks/ProductPage/basket/useGetBasket.js";
import {useNavigate} from "react-router-dom";
import {LINK_BASKET_PAGE} from "../../../constants/links.js";
import {checkProduct} from "../../../pages-functions/ProductPage/basket/checkProduct.js";

const PPBasketButton = ({orderData}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useUserAuth();

    //basket data for user
    const basketData = useGetBasket();
    // console.log(basketData,"basketData");

    //add product
    const handleAdd = () => {

        if (!checkOrderData(orderData)){//check order data
            dispatch(setNote(NT_BASKET_ADD_ERROR_REQ))
            handleClearNotes(dispatch,4)
            return;
        }

        handleAddBasket(orderData)
            .then(() => dispatch(setNote(NT_BASKET_ADD)))
            .catch(() => dispatch(setNote(NT_BASKET_ADD_ERROR)))
            .finally(() => handleClearNotes(dispatch,3))
    }


    //check user
    if (!user) return;

    //check product in basket
    if (checkProduct(orderData.product.id, basketData)) {
        return (
            <Button
                onClick={() => navigate(LINK_BASKET_PAGE)}
                size={"sm"}
                variant={"success"}
            >
                Перейти к корзине
            </Button>
        )
    }

    //jsx
    return (
        <Button
            onClick={handleAdd}
            size={"sm"}
            variant={"secondary"}
        >
            В корзину
        </Button>
    );
};

export default PPBasketButton;
