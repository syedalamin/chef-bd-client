import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import './navbarChef.css'
import ActiveLink from '../../Home/ActiveLink/ActiveLink';
const NavbarChef = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))
    }

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <div className='bg-gray-100 '>
            <nav className="navbar  w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>
                            <ActiveLink to='/register'>Register</ActiveLink>
                        </div>
                    </div>
                    <a className="text-xl font-bold">Chef-Tutul</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                        <ActiveLink to='/register'>Register</ActiveLink>
                    </ul>
                </div>
                <div className="navbar-end">
                {hover && <h1>{user.displayName}</h1>}
                    {
                        user && <img onMouseEnter={onHover}
                        onMouseLeave={onHover}  className=' mx-5 rounded-full' style={{ width: '35px', height: '35px' }} src={user.photoURL} alt="" />
                    }
                    {user ?
                        <button onClick={handleLogOut} className='btn btn-sm bg-green-700'>LogOut</button> :
                        <Link to='/login'><button className='btn btn-sm bg-teal-700'>Login</button></Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default NavbarChef;