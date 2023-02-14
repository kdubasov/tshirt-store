import {configureStore} from "@reduxjs/toolkit";
import notificationsSlice from "./slices/notificationsSlice.js";


export const store = configureStore({
    reducer : {
        notifications: notificationsSlice,
    },
})