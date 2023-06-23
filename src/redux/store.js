import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import passwordSlice from "./reducers/passwordSlice";
import loginSlice from "./reducers/loginSlice";

const store = configureStore({
    reducer:{
        authSlice,
        passwordSlice,
        loginSlice
    }
})

export default store;