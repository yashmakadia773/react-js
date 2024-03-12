import React from 'react'

const Signin = () => {

    const login=()=>{
        // window.location.href = "/Login"

    }
    return (
        <div>
            <form>

                <div class="segment">
                    <h1>Log in</h1>
                </div>

                <label>
                    <input type="name" placeholder="full name "/>
                </label>
                <label>
                    <input type="email" placeholder="Email Address"/>
                </label>
                <label>
                    <input type="password" placeholder="Password"/>
                </label>
                <button class="red" type="button" ><i class="icon ion-md-lock" ></i> Sign in</button>

                <div class="segment">
                    <button class="unit" type="button"><i class="icon ion-md-arrow-back"></i></button>
                    <button class="unit" type="button"><i class="icon ion-md-bookmark"></i></button>
                    <button class="unit" type="button"><i class="icon ion-md-settings"></i></button>
                </div>

                <div class="input-group">
                    <button class="Signin" type="button" onClick={login}>Log in</button>
                </div>

            </form>


        </div>)
}

export default Signin