import React from "react";
import {MobileIcon, Nav, NavBtn, NavBtnLink, NavContainer, NavItem, NavLinks, NavLogo, NavMenu} from "./NavbarElements";
import {FaBars} from 'react-icons/fa';


const Navbar = ({ toggle } : {toggle: any}) => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    getBank
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/o-nas'>O nas</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/kontakt'>Kontakt</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>ZALOGUJ SIĘ</NavBtnLink>
                </NavBtn>
            </NavContainer>
        </Nav>

    );
}

export default Navbar;