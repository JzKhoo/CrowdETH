import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Login from './components/Login'

const root = ReactDOM.createRoot(
    document.getElementById("root")
)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='Login' element={<Login />} />
        </Routes>
    </BrowserRouter>
)

//ReactDOM.render(<App />, document.getElementById('root'));