import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user?.uid);
    const handleLogout = () => {
        logOut()
            .then()
            .then(err => console.error(err))
    }

    const toggler = <>
        {
            user?.uid ? <li><button onClick={handleLogout}>Logout</button></li> : <>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/joinus'}>Join US</Link></li>
            </>

        }
    </>


    return (
        <div className="navbar bg-base-100 mb-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>My Clicks</Link></li>
                        <li><Link to={'/blog'}>Blogs</Link></li>
                        {toggler}
                    </ul>
                </div>
                <Link to='/' className="btn w-36 pb-2 btn-ghost normal-case text-xl"><img className='rounded-lg' src="./asset/brandLogo/logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'./myClick'}>My Clicks</Link></li>
                    <li><Link to={'/blog'}>Blogs</Link></li>
                    {toggler}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/myClick"} className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Header;