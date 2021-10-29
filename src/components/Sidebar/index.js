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
    <SidebarLink onClick={toggle} to="/">
      Home
     </SidebarLink>
     <SidebarLink onClick={toggle} to="/about">
      About
     </SidebarLink>
     <SidebarLink onClick={toggle} to="/media">
      Media
     </SidebarLink>
     <SidebarLink onClick={toggle} to="/events">
      Events
     </SidebarLink>
     <SidebarLink onClick={toggle} to="gallery">
      Gallery
     </SidebarLink>
    </SidebarMenu>
    <SideBtnWrap><SidebarRoute to="/contact">
     Contact Us
     </SidebarRoute></SideBtnWrap>
   </SidebarWrapper>
  </SidebarContainer> 
 )
}

export default Sidebar

