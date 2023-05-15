import React from "react";
import {MobileIcon, Nav, NavBtn, NavBtnLink, NavContainer, NavItem, NavLinks, NavLogo, NavMenu} from "./NavbarElements";
import {FaBars} from 'react-icons/fa';
import {useAuthUser, useIsAuthenticated, useSignOut} from "react-auth-kit";
import {BtnPage} from "../Transaction/TransactionElemetns";
import {BalanceTitle, BalanceValue} from "../Pages/Panel/PanelElements";
import Balance from "../Pages/Panel/Balance";


const Navbar = ({ toggle } : {toggle: any}) => {

    const isAuthenticated = useIsAuthenticated()
    const auth = useAuthUser()
    const signOut = useSignOut()

    const handleSignOut = async () => {
        signOut();
        //window.location.reload();
    };

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
                    {/*<NavItem>*/}
                    {/*    <NavLinks to='/o-nas'>O nas</NavLinks>*/}
                    {/*</NavItem>*/}
                    {/*<NavItem>*/}
                    {/*    <NavLinks to='/kontakt'>Kontakt</NavLinks>*/}
                    {/*</NavItem>*/}
                    {isAuthenticated() &&
                        <NavItem>
                            <NavLinks to='/panel'>Panel</NavLinks>
                        </NavItem>
                    }
                </NavMenu>
                {!isAuthenticated() &&
                    <NavBtn>
                        <NavBtnLink to='/login'>ZALOGUJ SIĘ</NavBtnLink>
                    </NavBtn>
                }

                {isAuthenticated() &&
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center"}}>

                        <div>
                            <BalanceTitle>
                                Email:
                            </BalanceTitle>
                            <BalanceValue style={{fontSize: "22px", marginTop: "-10px"}}>
                                {auth()?.email}
                            </BalanceValue>


                        </div>
                        <BtnPage onClick={handleSignOut}>Wyloguj się</BtnPage>
                    </div>

                }
            </NavContainer>
        </Nav>

    );
}

export default Navbar;