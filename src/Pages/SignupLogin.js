import React from 'react';
import './SignupLogin.css';

function SignupLogin(){
    return (
        <div className="login__container">
            <form class="form" id="login">
                <h1 className="header">Sign in</h1>
                
                <div className="form__message form__message-error">{/*Incorrect username/password combination.*/}</div>
                {/* Create sign in column*/}
                <div className="form__input-group">
                    <input type="text" className="form__input" autoFocus placeholder="Enter your email"></input>
                    <div className="form__input-error-message">{/*This is an error message*/}</div>
                </div>

                {/* Create password column */}
                <div className="form__input-group">
                    <input type="password" className="form__input" placeholder="Password"/>
                    <div class="form__input-error-message"></div>
                </div>
                <button className="form__button" type="submit">Continue</button>    

                {/* External link for creating and reseting password */}
                <p className="form__text">
                    <a href="#" className="forgot-password">Forgot password?</a>
                </p>
                <p className="form__text">
                    <a className="form__link" href="#" id="linkCreateAccount">Don't have an account? Create account</a>
                </p>
            </form>
        </div>
    );
}

export default SignupLogin;