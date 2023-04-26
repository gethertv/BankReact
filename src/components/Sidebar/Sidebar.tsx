import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu, SidebarRoute,
    SidebarWrapper,
    SideBtnWrap
} from "./SidebarElements";
import React from "react";

const Sidebar = ( {isOpen, toggle} : {isOpen:any, toggle:any}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>
                        About
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>ZALOGUJ SIĘ</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;