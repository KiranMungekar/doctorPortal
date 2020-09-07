import React from 'react'
import { Redirect ,useLocation , useHistory} from 'react-router';
import {Link, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import authService from './AuthService';


const ProtectedRoutes = ({component:Component, user,...rest})=>{
    return(
        <Route 
            {...rest}
            render={
                (props) => {
                    if(user != null){
                        if(user.role === 'DOCTOR'){
                            return <Component />
                        }
                    }else{
                        alert('Invalid Login');
                        return <p>Invalid Login... <Link to="/signup">Go back to Signup </Link> </p>
                    }
                 
             }}
        />
    )

}

const mapStateToProps= state=>({
    user:state.data.user
})
export default connect(mapStateToProps,{})(ProtectedRoutes);