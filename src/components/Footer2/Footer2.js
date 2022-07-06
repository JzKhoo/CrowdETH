import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
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
} from './Footer2.styles'

const Footer2 = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to=''>Our Features</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Terms of Service</FooterLink>          
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to=''>Our Features</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Terms of Service</FooterLink>          
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to=''>Our Features</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Terms of Service</FooterLink>          
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to=''>Our Features</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Terms of Service</FooterLink>          
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/Landing' onClick={toggleHome}>
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

export default Footer2