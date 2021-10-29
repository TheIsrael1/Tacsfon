import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
 background: #000;
 height: 80px;
 margin-top: -80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;

 @media screen and(max-width: 960px){
  transition: 0.8s all ease;
 }
`;

export const NavContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding: 0 24px;
 max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
font-size: 25px;
font-weight: bold;
text-decoration: none;
`;

export const NavImg = styled.img`
height: 80px;
width: 100%;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
 display: block;
 position: absolute;
 top: 0;
 right: 0;
 transform: translate(-100%, 60%);
 font-size: 1.8rem;
 cursor: pointer;
 color: #fff;
}
`
export const NavMenu = styled.ul`
text-decoration: none;
display:flex;
align-item: center;
list-style: center;
margin-right: -22px;

@media screen and (max-width: 768px){
 display: none;
}
`
export const NavItem =styled.li`
list-style-type: none;
 height: 80px;
`
export const NavLinks = styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
 border-bottom: 3px solid #01bf71;
}
`
export const NavBtn = styled.nav`
dislay: flex;
align-items: center;

@media screen and (max-width: 768px) {
 display: none
}
`
export const NavBtnLink = styled(LinkR)`
border-radius: 2px;
background #01bf71;
white-space: no-wrap;
padding: 5px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
 transition: all 0.2s ease-in-out;
 background: #fff;
 color: #010606;
}
`