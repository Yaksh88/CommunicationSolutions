import React from "react";
import './App.css';
import AboutUs from './Pages/AboutUs';
// import Home from './Components/Homes';
// import AboutUs from './AboutUs/aboutus';
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <>
            <AboutUs />
            {/* <Router>
                <Routes>
                    <Route 
                        exact 
                        path="/"
                        element={<Home />}
                    />  

                    <Route 
                        exact 
                        path="/aboutus"
                        element={<AboutUs />}
                    />  
                </Routes>
            </Router> */}
        
        </>
    )
}
export default App;
