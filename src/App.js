import React from "react";
import {
    BrowserRouter as Router,
    Routes, 
    Route,
    Navigate,
} from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Footer from "./Components/footer";
import ScheduleAppt from "./Pages/ScheduleAppt";
import AboutUs from "./Pages/AboutUs";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";
import SignupLogin from "./Pages/SignupLogin";

// function App() {
//     return (
//         <div className="App">
//             <Sidebar />
//             <Routes>
//                 <Route path="/" element={ <Home /> } />
//                 <Route path="signin" element={ <SignupLogin /> } />
//                 <Route path="schedule" element={ <ScheduleAppt /> } />
//                 <Route path="about" element={ <AboutUs />} />
//                 <Route path="testimonial" element={ <Testimonial />} />
//                 <Route path="contact" element={ <Contact />} />
//             </Routes>

//             <Home />
//         <Footer />
//         </div>
//     )
// }
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {/* This route is for 'Home' component -> path is '/' */}
                        <Route
                            exact
                            path="/"
                            element={<><Sidebar /><Home /></>}
                        />

                        {/*This route is for the 'Sign in' component -> path is /signin*/}
                        {/* This page deos not contain sidebar */}
                        <Route path="/signin" element={<SignupLogin />}/>

                        {/*This route is for the 'Schedule' component -> path is /schedule*/}
                        <Route
                            path="/schedule"
                            element={<><Sidebar /><ScheduleAppt /></>}
                        />
                        {/*This route is for the 'About' component -> path is /about*/}
                        <Route
                            path="/about"
                            element={<><Sidebar /><AboutUs /></>}
                        />
                        {/*This route is for the 'Testimonial' component -> path is /testimonial*/}
                        <Route
                            path="/testimonial"
                            element={<><Sidebar /><Testimonial /></>}
                        />
                        {/*This route is for the 'Contact' component -> path is /contact*/}
                        <Route
                            path="/contact"
                            element={<><Sidebar /><Contact /></>}
                        />
                        {/*This route is for any mismatch -> defaults to '/'*/}
                        <Route
                            path="*"
                            element={<Navigate to="/" />}
                        />
                </Routes>
            </Router>
        <Footer />
        </div>
        
    )
}
export default App;
