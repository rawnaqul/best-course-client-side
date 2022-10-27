import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { AuthContext } from '../../contexts/authprovider/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleLoginSubmit = e => {
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleLoginSubmit} className="btn btn-primary">Login</button>
                            </div>
                            <div>Or</div>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline"> <span className='mx-2'> <BsGoogle /></span> Login with Google</button>
                            </div>
                            <div>Or</div>
                            <div className="form-control mt-2">
                                <button className="btn btn-outline"> <span className='mx-2'> <BsGithub /></span> Login with GitHub</button>
                            </div>
                            <div className='mt-2'>
                                <p><small>Don't have an account? <Link className='text-cyan-700 font-medium' to="/register"> Register here</Link></small></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;