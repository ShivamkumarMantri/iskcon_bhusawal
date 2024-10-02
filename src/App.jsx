import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Screens/Home"
import About from "./Screens/About"
import Contact from "./Screens/Contact"
import NotFound from "./Screens/NotFound"

function App() {
    return (
        <Router>
            <div className="App">
                {/* Define all your routes inside Routes */}
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/about" element={<About />} /> 
                    <Route path="/contact" element={<Contact />} /> 
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
