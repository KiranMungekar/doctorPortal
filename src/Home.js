import React, { Component } from 'react'
import { Redirect ,useLocation , useHistory} from 'react-router';
import {Link} from 'react-router-dom'

const Home =()=>{
    
        return(
            <div>
                <h1>Home</h1>
                <Link to="/signup" >
                    SignIn
                </Link>
                

            </div>
        )
}

export default Home;