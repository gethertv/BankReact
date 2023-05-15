import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import PanelPage from "../components/Pages/Panel/PanelPage";
import {useIsAuthenticated} from "react-auth-kit";
import {useNavigate} from "react-router-dom";
const Home = () => {
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <Header />
            <PanelPage />
            <Footer />
        </>
    );
};

export default Home;