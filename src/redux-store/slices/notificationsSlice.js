import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: {
        show: false,
        title: null,
        text: null,
        variant: null,
    },
}

export const notificationsSlice = createSlice({
    name:'notifications',
    initialState,
    reducers:{
        setNote:(state,action) => {
            state.data = action.payload;
        },
        clearNote:(state) => {
            state.data = initialState.data;
        }
    },
})

export const {setNote,clearNote} = notificationsSlice.actions;
export default notificationsSlice.reducer;