import React, {useEffect, useState} from "react";
import Form from './Components/Form/Form';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {authPost, authUserData, authSliceSelector, selectIsAuth} from "./redux/reducers/authSlice";
import {passwordRegister} from "./redux/reducers/passwordSlice";
import {loginUserData} from "./redux/reducers/loginSlice";
import Login from "./Components/Login/Login";
import "./App.css";

function App() {
    const {data, status, error} = useSelector(authSliceSelector)
    // const isAuth = useSelector(selectIsAuth)

    const dispatch = useDispatch()


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const email = e.target[0].value
    //     const userName = e.target[1].value
    //
    //     dispatch(authUserData({email, userName}))
    // }

    // const addPassword = (e) => {
    //     e.preventDefault()
    //     const password1 = e.target[0].value
    //     const password2 = e.target[1].value
    //     dispatch(passwordRegister({password1,password2}))
    // }

    // const addLogin = (e) => {
    //     e.preventDefault()
    //     const username = e.target[0].value
    //     const password = e.target[1].value
    //     const data = dispatch(loginUserData({username,password}))
    //     if ("token" in data) {
    //         window.localStorage.setItem("token", data.token)
    //     }else if(!data){
    //         return alert("Не удалось авторизоваться")
    //     }
    // }

    return (
        <div className="App">
            {/*<Form/>*/}
            <Login/>
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <input type="email"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <button type="submit">Send</button>*/}
            {/*</form>*/}
            {/*<form onSubmit={addPassword}>*/}
            {/*    <input type="password"/>*/}
            {/*    <input type="password"/>*/}
            {/*    <button type="submit">Send</button>*/}
            {/*</form>*/}
            {/*<form onSubmit={addLogin}>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="password"/>*/}
            {/*    <button type="submit">Send</button>*/}
            {/*</form>*/}
        </div>
    );
}

export default App;
