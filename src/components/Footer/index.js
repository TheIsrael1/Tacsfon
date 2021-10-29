import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import {FooterContainer, FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems, FooterLinkTitle,
        FooterLink, SocialMedia, SocialIcons, SocialLogo, SocialMediaWrap, SocialIconLink, WebsiteRights} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                    <FooterLinkTitle> About Us</FooterLinkTitle>
                                    <FooterLink to="/about">About</FooterLink>
                                    <FooterLink to="/about">Units</FooterLink>
                        
                            </FooterLinkItems>
                            <FooterLinkItems>
                                    <FooterLinkTitle> Media</FooterLinkTitle>
                                    <FooterLink to="/media">Word</FooterLink>
                                    <FooterLink to="/media">Music</FooterLink>
                                    <FooterLink to="/media">Drama</FooterLink>                          
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                                    <FooterLinkTitle> Contact Us</FooterLinkTitle>
                                    <FooterLink to="/contact">Contact</FooterLink>
                                    <FooterLink to="/contact">Our Location</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                    <FooterLinkTitle> Social Media</FooterLinkTitle>
                                    <FooterLink to="/">Instagram</FooterLink>
                                    <FooterLink to="/">Facebook</FooterLink>
                                    <FooterLink to="/">Youtube</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo onClick={toggleHome} to="/"> Tacsfon UI </SocialLogo>
                            <WebsiteRights> Tacsfon © {new Date().getFullYear()} All rights reserved </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
