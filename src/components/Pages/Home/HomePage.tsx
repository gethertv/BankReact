import React from "react";
import Service from "./service/Service";
import Banner from "./banner/Banner";
import Exchange from "./ exchange/Exchange";


const HomePage = () => {
    return (
        <>
            <Banner />
            <Service />
            <Exchange />

        </>
    );
}

export default HomePage;