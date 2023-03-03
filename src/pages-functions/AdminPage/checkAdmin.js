import {ADMIN_EMAILS} from "../../constants/general.js";

export const checkAdmin = user => {
    if (!user) return false;

    for (let elem of ADMIN_EMAILS){
        if (elem === user.email){
            return true;
        }
    }

    return false;
}