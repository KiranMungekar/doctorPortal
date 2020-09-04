import React, { Component } from 'react'
import authService from './AuthService';




const Signup= (props)=>{

    

    
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
                        <button onClick={()=>{
                            authService.login(()=> {
                                props.history.push('/dashboard/user1')
                            })
                        }}>Login</button>
                    </div>
                </div>

            </div>
        )
    
}

export default Signup;