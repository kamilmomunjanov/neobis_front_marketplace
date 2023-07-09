import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import passwordSlice from "./reducers/passwordSlice";
import loginSlice from "./reducers/loginSlice";
import formSlice from "./reducers/formGetDataUser";
import phoneSlice from "./reducers/phoneVerify";
import codeSlice from "./reducers/codeVerifySlice";
import productSlice from "./reducers/productsPostSlice";
import productGetSlice from "./reducers/productGetSlice";
import myProductGetSlice from "./reducers/myProductSlice";
import {rememberReducer, rememberEnhancer} from "redux-remember";



const rootReducer = combineReducers({
    authSlice,
    passwordSlice,
    loginSlice,
    formSlice,
    phoneSlice,
    codeSlice,
    productSlice,
    productGetSlice,
    myProductGetSlice
})

const reducer = rememberReducer(rootReducer)

const rememberedKeys = [ 'authSlice', 'passwordSlice','loginSlice', 'formSlice','phoneSlice','codeSlice','productSlice','productGetSlice','myProductGetSlice' ]


const store = configureStore({
    reducer,
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        { persistWholeStore: true }
    )]
})

export default store;