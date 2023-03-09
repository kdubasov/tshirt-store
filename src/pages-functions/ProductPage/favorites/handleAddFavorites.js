import {ref, set} from "firebase/database";
import {realtimeDB} from "../../../database/firebase-connect.js";
import {LINK_FAVORITES_PAGE} from "../../../constants/links.js";

export const handleAddFavorites = (user, product) => {
    const databaseURL = `${LINK_FAVORITES_PAGE}/${user.uid}/${product.id}`;

    return set(ref(realtimeDB, databaseURL),product)
}
