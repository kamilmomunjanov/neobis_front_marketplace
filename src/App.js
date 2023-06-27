import React, {useEffect, useState} from "react";
import Login from "./Components/Login/Login";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Register from "./Components/Register/Register";
import Password from "./Components/Password/Password";
import PasswordRepeat from "./Components/Password/PasswordRepeat";

function App() {


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/password" element={<Password/>}/>
                <Route path="/password/repeat" element={<PasswordRepeat/>}/>
            </Routes>
        </div>
    );
}

export default App;
