import React from "react";
import s1 from '../assets/imgplaceholder.jpg';
import '../styles/aboutus.css';

function ServiceTwo() {
    return (
        <div className="serv_container_t">
            <div className="gapspace">
            </div>
            <div className="service_two">
                <h4>Business Consulting</h4>
                <p>Business  Counseling That Are Geared</p>
                <p>Towards Their Clients Best Interest</p>
            </div>
            <div class="vLine"></div>
            <div className="serv_img_t">
                <p><img src={s1} alt=""/></p>             
            </div>
            
        </div>
    );
}

export default ServiceTwo;