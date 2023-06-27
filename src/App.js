import React, {useEffect, useState} from "react";
import Login from "./Components/Login/Login";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Register from "./Components/Register/Register";
import Password from "./Components/Password/Password";
import PasswordRepeat from "./Components/Password/PasswordRepeat";
import Profile from "./Components/Profile/Profile";

function App() {


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/password" element={<Password/>}/>
                <Route path="/password/repeat" element={<PasswordRepeat/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;
