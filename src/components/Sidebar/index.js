import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SideBarElements';
const Sidebar
 = ({isOpen,toggle}) => {
 return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
   <Icon onClick={toggle}>
    <CloseIcon> </CloseIcon>
   </Icon>
   <SidebarWrapper>
    <SidebarMenu>
     <SidebarLink onClick={toggle} to="about">
      About
     </SidebarLink>
     <SidebarLink onClick={toggle} to="discover">
      Discover
     </SidebarLink>
     <SidebarLink onClick={toggle} to="services">
      Services
     </SidebarLink>
     <SidebarLink onClick={toggle} to="signup">
      Sign Up
     </SidebarLink>
    </SidebarMenu>
    <SideBtnWrap><SidebarRoute to="/signin">
     Sign In
     </SidebarRoute></SideBtnWrap>
   </SidebarWrapper>
  </SidebarContainer> 
 )
}

export default Sidebar

