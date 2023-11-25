import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Companies from "./pages/Companies";
import ReviewAdd from "./pages/ReviewAdd";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/companies" element={<Companies/>}/>
                <Route path="/login" element={<Login redirectTo="/"/>}/>
                <Route path="/register" element={<Register redirectTo="/"/>}/>
                <Route path="/add-review" element={<ReviewAdd/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
