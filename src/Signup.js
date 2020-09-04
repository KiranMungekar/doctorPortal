import React, { Component } from 'react'

function login(){
    alert('Login please')
}

class Signup extends Component{

    

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <button onClick={login}>Login</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Signup;