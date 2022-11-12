import React from 'react';
import Footer from '../../Footer/Footer';
import FooterTwo from '../../Footer/FooterTwo';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ContactUs></ContactUs>
            <Footer></Footer>
            <FooterTwo></FooterTwo>
        </div>
    );
};

export default Home;