import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Login from './pages/Login/Login'
import SignUp from "./pages/SignUp/SignUp";
import Landing from "./pages/Landing/Landing";
import Explore from './pages/Explore/Explore'
import Pitch from './pages/Pitch/Pitch'
import AboutUs from "./pages/AboutUs/AboutUs";
import Venture from "./pages/Ventures/[ventureAddress]";


const root = ReactDOM.createRoot(
    document.getElementById("root")
)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='Login' element={<Login />} />
            <Route path='SignUp' element={<SignUp />} />
            <Route path='Landing' element={<Landing />} />
            <Route path='Explore' element={<Explore />} />
            <Route path='Pitch' element={<Pitch />} />
            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='Ventures/:ventureAddress' element={<Venture />} />
        </Routes>
    </BrowserRouter>
)

//ReactDOM.render(<App />, document.getElementById('root'));