import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/authprovider/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className=''>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link>All Courses</Link></li>
                            <li><Link>FAQ</Link></li>
                            <li><Link>Blog</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Profile
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link>Log In</Link></li>
                                    <li><Link>Sign Up</Link></li>
                                </ul>
                            </li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl"><span className='text-lime-600'>SERA</span>Course</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/courses">All Courses</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li tabIndex={0} className="">
                            <Link className=''>
                                Profile
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to="/login">Log In</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="form-control mr-3">
                        <label className="label cursor-pointer">
                            <span className="label-text text-xs mr-3 opacity-25">Dark Mode</span>
                            <input type="checkbox" className="toggle toggle-xs" />
                        </label>
                    </div>
                    <div className="w-10 rounded-full mr-3">
                        {
                            user?.photoURL ?
                                <img src={user?.photoURL} className="rounded-full" alt='' />
                                : <FaUserAlt />
                        }
                    </div>

                    <Link className="btn"><button onClick={handleLogOut} className="btn btn-sm">Log Out</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Header;