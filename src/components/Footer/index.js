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
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                    <FooterLinkTitle> Contact Us</FooterLinkTitle>
                                    <FooterLink to="/">Contact</FooterLink>
                                    <FooterLink to="/">Support</FooterLink>
                                    <FooterLink to="/">Destinations</FooterLink>
                                    <FooterLink to="/">Sponsorships</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                    <FooterLinkTitle> Videos</FooterLinkTitle>
                                    <FooterLink to="/">Submit Video</FooterLink>
                                    <FooterLink to="/">Ambassadors</FooterLink>
                                    <FooterLink to="/">Agency</FooterLink>
                                    <FooterLink to="/">Influencer</FooterLink>                           
                            </FooterLinkItems>
                            <FooterLinkItems>
                                    <FooterLinkTitle> Social Media</FooterLinkTitle>
                                    <FooterLink to="/">Instagram</FooterLink>
                                    <FooterLink to="/">Facebook</FooterLink>
                                    <FooterLink to="/">Youtube</FooterLink>
                                    <FooterLink to="/">Twitter</FooterLink>                            
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo onClick={toggleHome} to="/"> dolla </SocialLogo>
                            <WebsiteRights> dolla © 2020 {new Date().getFullYear()} All rights reserved </WebsiteRights>
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
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin />
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
