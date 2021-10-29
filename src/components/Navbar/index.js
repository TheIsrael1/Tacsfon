import React, {useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavContainer, NavLogo, NavImg, MobileIcon, NavMenu,  NavLinks, NavItem, NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import logo from './tacsfon-logo.png';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

 return (

  <>
  <IconContext.Provider value={{}}>
   <Nav scrollNav={scrollNav}>
    <NavContainer>
     <NavLogo to="/" onClick={toggleHome}><NavImg src={logo}></NavImg>UI</NavLogo>
     <MobileIcon onClick={toggle}>
     
     <FaBars />
     </MobileIcon>
     <NavMenu>
     <NavItem>
     <NavLinks smooth="true" duration={500} spy="true" exact='true' offset={-80} to="/">Home</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth="true" duration={500} spy="true" exact='true' offset={-80} to="/about">About</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth="true" duration={500} spy="true" exact='true' offset={-80} to="/media">Media</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth="true" duration={500} spy="true" exact='true' offset={-80} to="/events">Events</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks smooth="true" duration={500} spy="true" exact='true' offset={-80} to="/gallery">Gallery</NavLinks>
      </NavItem>
     </NavMenu>
     <NavBtn><NavBtnLink smooth="true" duration={500} spy="true" exact='true' offset={-80} to="/contact">Contact Us</NavBtnLink></NavBtn>
    </NavContainer>
   </Nav>
   </IconContext.Provider>
  </>
 )
}

export default Navbar
