import React from 'react';
import './admin.css'
import logo from '../Image/Group 1329.png'
import { Link } from 'react-router-dom';
const AdminLogin = () => {


        // I don't know if it will take me two more days to do it 🙄


    return (
        <form className="text-center border border-light p-5 from-design" action="#!">
            <Link to="/"><img className="admin-logo" src={logo} alt="" /></Link>
            <p className="h4 mb-4"> Admin Sign in</p>
            <input type="email" id="defaultLoginFormEmail" value="admin@gmail.com" className="form-control mb-4" />
            <input type="password" id="defaultLoginFormPassword" value="@admin" className="form-control mb-4" />
            <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
        </form>

    );
};

export default AdminLogin;