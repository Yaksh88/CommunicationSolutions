import React from "react";
import "../PagesCSS/AboutUs.css";
// import s1 from '../assets/imgplaceholder.jpg';
import place from '../assets/placeholder.png';
import serv1 from '../assets/serviceone.jpg';
import serv2 from '../assets/servicetwo.jpg';
import serv3 from '../assets/servicethree.jpg';

const ContactUs = () => {
	return (
		<>
		<div className="hero_section_ab">
            <div className="container">
                <h4>About Us</h4>
                <p className="text">Our Mission is to help get</p>
                <p className="text">your name out there in</p>
                <p className="text">the world!</p>
            </div>
        </div>
		<div className="containersz">
            <div className="title-text">
                <div className="place_img">
                    <img src={place} alt=""/>             
                </div>
                <p>Info about the client/Company</p>
            </div>
        </div>
        <h4 className="serv_title">Here are some of the services we offer...</h4>
        <div id="serv_cards">
            <div className="wrapper">
                <div className="box-area">
                    <div className="box">
                        <img src={serv1} alt=""/>
                        <div className="overlay">
                            <h3>Yelp Campaign</h3>
                            <p>Management Of Promotional Outlets such as Yelp</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={serv2} alt=""/>
                        <div className="overlay">
                            <h3>Business Coaching</h3>
                            <p>Business  Coaching That Are Geared 
                            Towards Their Clients Best Interest</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={serv3} alt=""/>
                        <div className="overlay">
                            <h3>Communication Optimization</h3>
                            <p>Streamlines The Essential Context Needed </p>
                            <p>For Clients To Maintain And Grow Their Business</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		{/* <div className="serv_container">
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
		<div className="serv_container_t">
            <div className="gapspace">
            </div>
            <div className="service_two">
                <h4>Business Coaching</h4>
                <p>Business  Coaching That Are Geared</p>
                <p>Towards Their Clients Best Interest</p>
            </div>
            <div class="vLine"></div>
            <div className="serv_img_t">
                <p><img src={s1} alt=""/></p>             
            </div>
            
        </div>
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
        </div> */}
		</>
	);
};

export default ContactUs;