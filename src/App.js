import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero"
import './App.css'

const App = () => {
    return (
        <Router>
            <Navbar />
        </Router>
    );
}

export default App;