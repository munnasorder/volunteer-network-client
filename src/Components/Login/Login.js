import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Image/Group 1329.png'
import './login.css'
import { googleSignIn, googleSignOut, initializeFirebaseLogin } from './LoginManagment';

const Login = () => {
    initializeFirebaseLogin();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }
    const handleResponse = (res, redirect) => {
        setLoggedInUser(res)
        redirect && history.replace(from);
}
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                res && handleResponse(res, true);
            })
    }
    const googleSignUp = () => {
        if(window.confirm('Sorry this button not available please sign in google.')){
            googleSignIn()
            .then(res => {
                res && handleResponse(res, true);
            })
        }
    }
    return (
        <div>
        <div className="login d-flex justify-content-center">
            <div className="row">
                <div className="custom-logo">
                    <Link to="/"><img src={logo} height="70" alt="" /></Link>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center py-5" style={{height:'400px'}}>
            <div className="card-section card w-50 mt-5 d-flex justify-content-center align-items-center" >
                <div className="card-body ">
                    <h3>Login With</h3> <br />
                </div>
                <div className="">
                    <button className="login-button " onClick={handelGoogleSignIn}>
                        <img className='google-button' src="https://www.freepngimg.com/thumb/google/66903-google-pay-gboard-platform-logo-cloud.png" height="30" alt="" />Continue with Google</button>
                </div>
                <br/>
                <p>Don't have an account? <Link onClick={googleSignUp} to="#">Create an account</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Login;