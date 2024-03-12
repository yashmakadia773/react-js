import React, { useRef } from 'react'
import Card from './Card';

const Login = () => {
    let email = useRef();
    let pass = useRef();

    const Login = () => {
        if (email.current.value == "yash" && pass.current.value == 1234) {
            window.location.href = "/Navber"

        } else {
            alert("afkdsjfkaj");
        }
    }

    let signin = () => {
        window.location.href = "/Signin"
    }


    return (
        <div>
            <form>

                <div class="segment">
                    <h1>Log in</h1>
                </div>

                <label>
                    <input type="email" placeholder="Email Address" ref={email} />
                </label>
                <label>
                    <input type="password" placeholder="Password" ref={pass} />
                </label>
                <button class="red" type="button" onClick={Login} ><i class="icon ion-md-lock" ></i> Log in</button><br />
                <a href="" class='forgetpass'>Forget password</a>

                <div class="segment">
                    <button class="unit" type="button"><i class="icon ion-md-arrow-back"></i></button>
                    <button class="unit" type="button"><i class="icon ion-md-bookmark"></i></button>
                    <button class="unit" type="button"><i class="icon ion-md-settings"></i></button>
                </div>

                <div class="input-group">
                    <button class="Signin" type="button" onClick={signin}>Sign up</button>
                </div>

            </form>


        </div>
    )
}

export default Login