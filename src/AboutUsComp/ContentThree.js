import React from "react";
import s1 from '../assets/imgplaceholder.jpg';
import '../styles/aboutus.css';

function ServiceThree() {
    return (
        <div className="serv_container_th">
            <div className="serv_img_th">
                <p><img src={s1} alt=""/></p>             
            </div>
            <div class="vLine"></div>
            <div className="service_three">
                <h4>Communication Optimization</h4>
                <p>Streamlines The Essential Context Needed </p>
                <p>For Clients To Maintain And Grow Their Business</p>
            </div>
        </div>
    );
}

export default ServiceThree;

