import React, {useState} from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HomePage from "../components/Pages/Home/HomePage";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
const Home = () => {

    return (
        <>
            <Header />
            <HomePage />
            <Footer />
        </>
    );
};

export default Home;