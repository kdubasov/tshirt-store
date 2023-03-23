import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

export const notificationsSlice = createSlice({
    name:'notifications',
    initialState,
    reducers:{
        setNote:(state,action) => {
            state.data.push(action.payload);
        },
        clearNote:(state) => {
            state.data.pop();
        }
    },
})

export const {setNote,clearNote} = notificationsSlice.actions;
export default notificationsSlice.reducer;