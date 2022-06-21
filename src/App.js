import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import './App.css'
// import Home from './components/pages/Home'

function App() {
    return (
        <>
            <Router>
                <Navbar />
            </Router>
            <Hero />
        </>
    )
}

export default App;