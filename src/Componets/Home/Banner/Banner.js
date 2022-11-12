import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../lottie/99312-developer-skills.json'
import './Banner.css';

const Banner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
         <div className='BannerHead'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container myBanner'>
            <div className='BannerHeading'>
                <h1 className="text-2xl text-sky-300 font-bold mb-4 mt-3">Welcome To</h1>
                <h1 className="text-4xl font-bold text-rose-800">AAE it Institute</h1>
                <p className="py-4 text-black font-mono">AAE it Institute started off as an IT and web-based solutions, services and web design,development,graphic etc company in Ireland, Germany, and Bangladesh in 2022. Over the years, AAE it Institute has delivered successful projects in multiple platforms to clients in the US, Canada, UK, Ireland, Norway, Belgium, Netherlands, Bangladesh, Australia to name a few countries. The founders decided to set up AAE it Institute  in 2022 to provide professional IT training along with IT Skill Enhancement Training Program with the outsourcing market for graduates in view to gain work that follows international standards and quality. Additionally, AAE it Institute offers training delivery solutions to corporations, institutions, and individuals along with internship for graduates</p>
            </div>
            <div className='fancyImage flex-col  sm:flex-row-reverse
            md:flex-row-reverse object-cover'>
                <Lottie
                    options={defaultOptions}
                />
            </div>
        </div>
         </div>

    )
       
    
}

export default Banner;
