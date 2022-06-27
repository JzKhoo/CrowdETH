import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Explore from "./pages/Explore/Explore";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Login from './pages/Login/Login'
import SignUp from "./pages/SignUp/SignUp";
import Landing from './components/Landing'

const root = ReactDOM.createRoot(
    document.getElementById("root")
)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='Explore' element={<Explore />} />
            <Route path='HowItWorks' element={<HowItWorks />} />
            <Route path='Login' element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path='Landing' element={<Landing />} />
        </Routes>
    </BrowserRouter>
)

//ReactDOM.render(<App />, document.getElementById('root'));