import React, { Component, useState } from 'react'
import authService from './AuthService';

import {connect} from 'react-redux';

import {signInUser} from './actions';



const Signup= (props)=>{
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [types] = useState([
        {label:'Doctor', value:'doctor'},
        {label:'Patient', value:'patient'}
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
                        <select value={type} onChange={(e)=> setType(e.target)}>
                            {types.map(type=>(
                                <option key={type.label} value={type.value} >{type.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button onClick={()=>{
                            props.signInUser(email,password,type).then(({isValid, id})=>{
                                if(type === 'doctor' && isValid){
                                    props.history.push(`/dashboard/${type}/${id}`);
                               }else{
                                   props.history.push(`/dashboard/${type}/${id}`);
                               }
                            });
                         
                            
                        }}>Login</button>
                    </div>
                </div>

            </div>
        )
    
}

const mapStateToProps =state=>({
    user: state.data.user
})

export default connect (mapStateToProps, {signInUser})(Signup);