import React from 'react';
import { FaFacebook,FaTwitter,FaLinkedinIn,FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo (1).png'
import './Footer.css'


const Footer = () => {
    return (
        <div className='p-10 bg-base-100 text-base-content'>
            <footer class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container">
            <div>
            <img  className='footerLogo' src={logo} alt="" />
                <p className='footerPara'>AAE it Institute.com<br />Providing reliable tech since 2022</p>
            </div>
            <div className='footerServices'>
                <span class="footer-title">Services</span>
                <br />
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div className='footerCompany'>
                <span class="footer-title">Company</span>
                <br />
                <Link to='/aboutus'>About us</Link>
                <Link to='/navcontact'>Contact</Link>
                <Link to='/'>Gallery</Link>
                <Link to='/login'>Log in</Link>
            </div>
            <div className='social-media'>
                 <span class="footer-title">Social Media</span>
                <br /> 
                <a class="link link-hover"><FaFacebook/></a>
                <a class="link link-hover"><FaTwitter/></a>
                <a class="link link-hover"><FaInstagram/></a>
                <a class="link link-hover"><FaLinkedinIn/></a>
            </div>
        </footer>
        </div>
    );
};

export default Footer;