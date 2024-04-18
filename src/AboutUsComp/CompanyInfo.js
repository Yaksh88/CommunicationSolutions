import React from "react";
import '../styles/aboutus.css';
import place from '../assets/placeholder.png';


function Title() {
    return (
        <div className="containersz">
            <div className="title-text">
                <div className="place_img">
                    <img src={place} alt=""/>             
                </div>
                <p>Info about the client/Company</p>
            </div>
        </div>
    );
}

export default Title;