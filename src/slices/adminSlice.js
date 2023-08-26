import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isloggedin: false,
    },
    reducers: {
        login: (state) => {
            state.isloggedin = true;
        },
        logout: (state) => {
            state.isloggedin = false;
        },
    },

})
export const { login, logout } = adminSlice.actions;
export const selectAdmin = (state) => state.admin.isloggedin;
export default adminSlice.reducer;