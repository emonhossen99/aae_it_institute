import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='p-10  text-base-content contactUs'>
            
      <h1 className='text-primary text-3xl mt-8 mb-12 text-center'>CONTACT US</h1>
            <footer class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  container">
                <div className='contactBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 heroIcons">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h5>Address :</h5>
                    <p>Noor Mansion (3rd Floor),Plot#04,</p>
                    <p>Main Road#01,Mirpur-10, Dhaka-1216</p>
                </div>

                <div className='contactBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 heroIcons">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <h5>Call Us :</h5>
                    <p>+8801909758928,</p>
                    <p>+8801834507987</p>

                </div>
                
                <div className='contactBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 heroIcons">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <h5>Email :</h5>
                    <p>mdxhamedemon@gmail.com,</p>
                    <p>emonayon270@gmail.com</p>
                </div>

                <div className='contactBox'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 heroIcons">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <h5>Work Hours</h5>
                    <p>Monday - Sunday,</p>
                    <p>10AM - 09PM</p>
                </div>
            </footer>
            <Link className='buttonLink' to='/navcontact'>
            <button className='ContactButton' >Contact Us</button></Link>
        </div>
    );
};

export default ContactUs;