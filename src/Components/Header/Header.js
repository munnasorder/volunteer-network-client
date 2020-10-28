import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Image/Group 1329.png'
import { googleSignOut } from '../Login/LoginManagment';
const Header = () => {
    const handelSignOut = () => {
        googleSignOut();
        window.location.reload();
        }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
        <nav className="mb-1 navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
            <Link className="navbar-brand" to="/"> <img src={logo} alt="" height="60" /> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/"><strong>Home</strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/"><strong>Donation</strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/"><strong>Events</strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/"><strong>Blog</strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to={loggedInUser.email ? "/" : "/login"}>
                            <strong className="px-4 py-2 rounded text-white bg-primary">Register</strong></Link>
                    </li>
                    {
                        loggedInUser.displayName
                            ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/UserEvent"><strong>{loggedInUser.displayName}</strong></Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={handelSignOut} className="nav-link text-dark" to="/"><strong>Logout</strong></Link>
                                </li>
                            </>
                            :
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/admin">
                                    <strong className="px-4 py-2 rounded text-white bg-dark">Admin</strong></Link>
                            </li>
                    }
                </ul>
            </div>
        </nav>
    </div>
    );
};

export default Header;