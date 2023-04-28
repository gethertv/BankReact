import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../components/Pages/Home/HomePage";
import React, {useState} from "react";
import Header from "../components/Header";
import AboutPage from "../components/Pages/About/AboutPage";

const About = () => {

    return (
        <>
            <Header />
            <AboutPage />
        </>
    );
}

export default About;