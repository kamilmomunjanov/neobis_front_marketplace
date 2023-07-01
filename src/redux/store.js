import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import passwordSlice from "./reducers/passwordSlice";
import loginSlice from "./reducers/loginSlice";
import formSlice from "./reducers/formGetDataUser";
import phoneSlice from "./reducers/phoneVerify";

const store = configureStore({
    reducer:{
        authSlice,
        passwordSlice,
        loginSlice,
        formSlice,
        phoneSlice
    }
})

export default store;