import React from "react";
import s1 from '../assets/imgplaceholder.jpg';
import '../styles/aboutus.css';

function ServiceOne() {
    return (
        <div className="serv_container">
            <div className="serv_img">
                <img src={s1} alt=""/>             
            </div>
            <div class="vLine"></div>
            <div className="service_one">
                <h4>Yelp Campaign</h4>
                <p>Management Of Promotional Outlets</p>
                <p> Such As Yelp, Facebook, and Etc</p>
            </div>
        </div>
    );
}

export default ServiceOne;