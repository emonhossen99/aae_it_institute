import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo (1).png'
import GitLogo from '../../images/Sosal Login/github (1).png'
import singIn from '../../images/SingIn and SingUp/singIn.jpg'
import './Login.css'

const Login = () => {
    return (

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mySingIn'>
        <div className='BannerHeading'>
            <img src={singIn} alt="singIn" />
        </div>
        <div className=' flex-col  sm:flex-row-reverse
        md:flex-row-reverse object-cover'>
          <div className='flex h-full justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='HeadingLogo'>
                        <h2 className="text-center font-bold text-4xl text-danger">Sing in</h2>
                        <img  className='imagesLogos' src={logo} alt="" />
                        </div>
                    <form>

                        <div className="form-control w-full max-w-xs border-0">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs border-0">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <p>
                            Reset Password ??
                            <button  className="text-primary mb-3 bg-none">Reset Pass..</button>
                        </p>
                        <input type="submit" className="mt-2 btn btn-danger w-full max-w-xs text-white font-bold" value='Sing In' />
                    </form>
                    <p>
                        New To AAE it Institute ??
                        <Link className='text-primary mx-2' to='/singup'>Sing Up</Link>
                    </p>

                    <div className="divider">OR</div>
                    <button className='Githublogo btn btn-info'><img src={GitLogo} height='20px' alt="" />Sing Up With Github</button> 
                </div>
            </div>
        </div>
        </div>
    </div>
        
    );
};

export default Login;
