import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const NavbarChef = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error => console.log(error.message))
    }


    return (
        <div>
            <div className="navbar bg-base-100   w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Chef-Tutul</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <Link>{user?.email}</Link>
                    }
                    { user ?
                       <button onClick={handleLogOut} className='btn btn-sm '>LogOut</button>:
                       <Link to='/login'><button className='btn btn-sm '>Login</button></Link>
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default NavbarChef;