import React from "react";
import Navbar from '../AboutUsComp/navbar';
import Home from '../AboutUsComp/MainHero';
import Title from "../AboutUsComp/CompanyInfo";
import ServiceOne from "../AboutUsComp/ContentOne";
import ServiceTwo from "../AboutUsComp/ContentTwo";
import SectionThree from "../AboutUsComp/ContentThree";
import Footer from '../AboutUsComp/Footer';

const ContactUs = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<Title />
			<ServiceOne />
			<ServiceTwo />
			<SectionThree />
            <Footer />
		</div>
	);
};

export default ContactUs;
