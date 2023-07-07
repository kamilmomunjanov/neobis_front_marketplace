import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import passwordSlice from "./reducers/passwordSlice";
import loginSlice from "./reducers/loginSlice";
import formSlice from "./reducers/formGetDataUser";
import phoneSlice from "./reducers/phoneVerify";
import codeSlice from "./reducers/codeVerifySlice";
import productSlice from "./reducers/productsPostSlice";
import productGetSlice from "./reducers/productGetSlice";

const store = configureStore({
    reducer:{
        authSlice,
        passwordSlice,
        loginSlice,
        formSlice,
        phoneSlice,
        codeSlice,
        productSlice,
        productGetSlice
    }
})

export default store;