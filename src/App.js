import React, {useEffect, useState} from "react";
import Login from "./Components/Login/Login";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Register from "./Components/Register/Register";
import Password from "./Components/Password/Password";
import PasswordRepeat from "./Components/Password/PasswordRepeat";
import Profile from "./Components/Profile/Profile";
import MyProduct from "./Components/myProduct/MyProduct";
import MyFavoriteProduct from "./Components/myFavoriteProduct/MyFavoriteProduct";
import MainPage from "./Components/mainPage/MainPage";

function App() {


    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/password" element={<Password/>}/>
                <Route path="/password/repeat" element={<PasswordRepeat/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/products" element={<MyProduct/>}/>
                <Route path="/favorite" element={<MyFavoriteProduct/>}/>
                <Route path="/main" element={<MainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
