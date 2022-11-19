import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from './Register From/RegisterForm';
import './SCSS/login.scss';

const SignUp = () => {

    return (
        <div>
            <div className="signUp">
                <h3>SignUp</h3>
                <RegisterForm />
                <div className="loginControl">
                    <Link to='/' className='link'>Back to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
