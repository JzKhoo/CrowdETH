import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Explore from "./pages/Explore/Explore";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Login from './pages/Login/Login'

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
        </Routes>
    </BrowserRouter>
)

//ReactDOM.render(<App />, document.getElementById('root'));