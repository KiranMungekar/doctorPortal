import React from 'react'
import { Redirect ,useLocation , useHistory} from 'react-router';
import {Link, Route} from 'react-router-dom'

import authService from './AuthService';


const ProtectedRoutes = ({component:Component, ...rest})=>{

    return(
        <Route 
            {...rest}
            render={
                (props) => {
                    if(authService.checkAuth()){
                        return <Component />
                    }else{
                        return <p>Invalid Login...</p>
                    }
                 
             }}
        />
    )

}


export default ProtectedRoutes;