import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    loginStatus: "Login",
    userData: {}

}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initialState,
    reducers: {
        myCounter(state, action) {
            state.counter = state.counter + 2
        },
        myLoginStatus(state, action) {
            // console.log("state -- ", state.loginStatus)
            // console.log("action -- ", action.payload)
            state.loginStatus = action.payload
        },
        userLoginData(state, action) {
            state.userData = action.payload
        }


    }
})

export const loginSliceAction = loginSlice.actions;
export default loginSlice.reducer;