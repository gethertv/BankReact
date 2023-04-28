import {FooterAbout, FooterBar, FooterContainer, FooterIcon, FooterSocial, SocialInfo} from "./FooterElements";
import {MdOutlineMailOutline, MdPhone, MdLocationOn} from 'react-icons/md';
import React from "react";
const Footer = () => {
    return (
        <FooterBar>
            <FooterContainer>
                <FooterSocial>

                    <FooterIcon>
                        <MdOutlineMailOutline />
                    </FooterIcon>
                    <SocialInfo>
                        getbank@pwste.edu.pl
                    </SocialInfo>

                    <FooterIcon>
                        <MdPhone />
                    </FooterIcon>
                    <SocialInfo>
                        +48 32 32 32 32
                    </SocialInfo>

                    <FooterIcon>
                        <MdLocationOn />
                    </FooterIcon>
                    <SocialInfo>
                        37-500 Jarosław, xyz
                    </SocialInfo>

                </FooterSocial>
                <FooterAbout>
                    Copyright 2023 <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam congue sollicitudin ipsum, commodo aliquet lectus fermentum egestas.
                    Nulla ultricies nibh sagittis neque aliquam semper.
                    Quisque sollicitudin, dolor sit amet tempor egestas,
                    nulla justo vulputate libero, eu porttitor mi tortor eget ligula.
                </FooterAbout>
            </FooterContainer>
        </FooterBar>
    );
}

export default Footer;