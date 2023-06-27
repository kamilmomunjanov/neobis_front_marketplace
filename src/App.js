import React, {useEffect, useState} from "react";
import Login from "./Components/Login/Login";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Register from "./Components/Register/Register";

function App() {


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
