import React from 'react';
import logo from '../../images/logo/logo (1).png'
import './Footer.css'

const FooterTwo = () => {
    return (

           <div className=' LastFooter'>
             <footer class=" container">
                <div class="imgesDiv">
                <img  className='footerTwoLogo' src={logo} alt="" />
                <p className='footerTwoPara'>Copyright © 2022 - All right reserved By AAE it Institute</p>
                </div>
            </footer>
           </div>
    );
};

export default FooterTwo;