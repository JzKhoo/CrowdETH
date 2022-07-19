// Footer for Login.js, SignUp.js - Link to Home.js

import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa' 
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer1.styles'

const Footer1 = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Quick Links</FooterLinkTitle>
                        <FooterLink to='/Login'>Login</FooterLink>
                        <FooterLink to='/SignUp'>Sign Up</FooterLink>
                        <FooterLink to='/AboutUs'>About Us</FooterLink>
                        <FooterLink to='/OurFeatures'>Our Features</FooterLink>        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Find Out More</FooterLinkTitle>
                        <FooterLink to=''>GitHub</FooterLink>
                        <FooterLink to=''>Poster</FooterLink>
                        <FooterLink to=''>Video</FooterLink>      
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Back to Home
                    </SocialLogo>
                    <WebsiteRights>
                        CrowdETH © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer1