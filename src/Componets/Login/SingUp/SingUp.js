import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo (1).png';
import Glogo from '../../../images/Sosal Login/google.png';
import SingUps from '../../../images/SingIn and SingUp/singUp.jpg'
import './SingUp.css'

const SingUp = () => {
    return (


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mySingUp'>
        <div className='BannerHeading'>
            <img className='mySingUpImages' src={SingUps} alt="SingUps" />
        </div>
        <div className=' flex-col  object-cover'>
            <div className='flex h-full justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='HeadingLogo singupFrom'>
                        <h2 className="text-center font-bold text-4xl text-danger">Sing Up</h2>
                        <img  className='imagesLogos' src={logo} alt="" />
                        </div>
                    <form>

                        <div className="form-control w-full max-w-xs border-0">
                            <label className="label">
                                <span className="label-text singUpLevel">Full Name :</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs myinputBox"
                            />
                            </div>

                        <div className="form-control w-full max-w-xs border-0">
                            <label className="label">
                                <span className="label-text singUpLevel">Email Address :</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full max-w-xs myinputBox"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs border-0">
                            <label className="label">
                                <span className="label-text singUpLevel">Password :</span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered w-full max-w-xs myinputBox"
                            />

                        </div>
                        <input type="submit" className="mt-2 btn btn-danger w-full max-w-xs text-white font-bold" value='Create Account' />
                    </form>
                    <p>
                        All Ready Have An Account AAE it Institute ??
                        <Link className='text-primary mx-2' to='/login'>Log In</Link>
                    </p>

                    <div className="divider">OR</div>
                    <button className='Glogo btn btn-warning'><img src={Glogo} height='20px' alt="" />Sing Up With Google</button> 
                   
                </div>
            </div>
        </div>
        </div>
    </div>



        
    );
};

export default SingUp;