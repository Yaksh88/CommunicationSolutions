import React from 'react';

function SignupLogin(){
    return (
        <div>
            <header>
                <h1>Sign in</h1>
            </header>

            <div class="form__message-error">Incorrect username/password combination.</div>
            {/* Create sign in column*/}
            <div class="form__input-group">
                <input type="text" placeholder="Enter your email"></input>
                <div class="form__input-error-message">This is an error message</div>
            </div>

            {/* Create password column */}
            <div class="form__input-group">
                <input type="password" placeholder="Password"></input>
            </div>
            <button class="form__button" typoe="submit">Continue</button>    

            {/* External link for creating and reseting password */}
            <p class="form__text">
                <a href="#" class="form__link">Forgot password?</a>
            </p>
            <p class="form__text">
                <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
            </p>

        </div>
    );
}

export default SignupLogin;