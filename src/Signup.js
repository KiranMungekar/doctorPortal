import React, { Component, useState } from 'react'
import authService from './AuthService';




const Signup= (props)=>{
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [types] = useState([
        {label:'Doctor', value:'doctors'},
        {label:'Patient', value:'patients'}
    ]);
    const [type, setType]= useState('doctor')

        return(
            <div>
                <h1>Login</h1>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" value={email}  onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="type">Login as</label>
                        <select value={type} onChange={(e)=> setType(e.target.value)}>
                            {types.map(type=>(
                                <option key={type.label} value={type.value} > {type.label} </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button onClick={()=>{
                            authService.login(email,password,type, ()=> {
                                props.history.push(`/dashboard/${type}/1`)
                            })
                        }}>Login</button>
                    </div>
                </div>

            </div>
        )
    
}

export default Signup;