import '../login-style.css';

const OrganizerLogin = () => {
    return (
        <div id="login-box">
            <div class="left-box">
                <h1>Sign in</h1>


                    <div class="text-reg"><input type="text" name="email" placeholder="Email:"/></div>
                    <div class="text-reg"><input type="password" name="password" placeholder="Password:"/></div>

                    <div class="text-reg"><input type="submit" name="sign-up button" value="Log in" /></div>

            </div>
            
            <div class="right-box">
                <p class="signinwith"><strong>Log in with:</strong><br/><br/>
                </p>

                <button class="social" style={{backgroundColor: "SlateBlue"}}>Log in with Facebook</button>
                <button class="social" style={{backgroundColor: "DodgerBlue"}}>Log in with Twitter</button>
                <button class="social" style={{backgroundColor: "Tomato"}}>Log in with Gmail</button>
            </div>
            </div>
    );
}

export default OrganizerLogin;