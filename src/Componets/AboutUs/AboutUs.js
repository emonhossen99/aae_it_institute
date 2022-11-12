import React from 'react';
import ceo from '../../images/Aboutus/DSC_0294__1_-removebg-preview.png'
import Typed from 'react-typed';
import './Aboutus.css'

const AboutUs = () => {

    return (
        <div className="hero min-h-screen mb-20 myAboutUs">
            <div className="hero-content flex-col lg:flex-row ">
                <img src={ceo} className="myAboutUsImages w-full object-cover md:h-full md:w-58 lg:h-full lg:w-[400px] shadow-2xl " alt='emo' />
                <div className='discirptionDiv'>
                    <h1 className="text-2xl font-bold">Hello,I am Md Emon Hossen</h1>
                    {/* <h1 className="text-3xl text-purple-600 font-bold">I AM A :  <span className='typedJs'><Typed
                        strings={[
                            'Student',
                            'Web Designer',
                            'Web Developer',
                            'Freelancer',
                            'Founder and ceo of AAE'
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >

                    </Typed></span> */}

                    {/* </h1> */}
                    <p className="py-3">Assalamu Alaikum wa Rahmatullahi wa Barakatuh,
                        I am Mohammad Emon Hossain. Born 02/01/2001 My Home is a small village at Brahmapur Purpur Para in Naldanga Upazila of Natore District, . When I was young, I wanted to become a doctor, but when I was growing up, I heard a lot about software engineers.
                        I am trying to become a software engineer, I don't know how much Allah will give me, but what I have got, Alhamdulillah, I don't know how far I have come, but I want to go to the heights of success, thank you.</p>
                </div>
            </div>
        </div>

    );


}

export default AboutUs; 