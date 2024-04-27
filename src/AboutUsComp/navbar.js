import React from 'react';
import '../styles/aboutus.css';

function Navbar() {
 
    return (
        <>
            <nav className='nav'>
                <a href='/' className='title'>Communication Solutions</a>
                <ul>
                    <li>
                        <a href='/home'>Home</a>
                    </li>
                    <li>
                    <a href='/aboutus'>About Us</a>
                    </li>
                    <li>
                    <a href='/clienttestimonials'>Client Testimonials</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar