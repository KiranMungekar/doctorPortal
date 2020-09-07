import React, {useEffect } from 'react'
import {Link,useParams,withRouter} from 'react-router-dom';
import { useLocation } from 'react-router';
import {connect} from 'react-redux';
import PatientsList from './patients/PatientsList';
import {fetchUser,fetchPatients} from './actions'


const Dashboard = ({user,isLoggedin, patients,fetchPatients,fetchUser,match,history})=> {
   const params=useParams();
    
   useEffect(()=>{
        
        if(!isLoggedin){
            console.log('Redirect Back to Signup' + isLoggedin)
            history.push('/signup');
        }else{
            showDashboard();
            showPatient();
        }
    });


    const showDashboard=()=>{
        
            if(isLoggedin && user == null){
                fetchUser(params.type, params.id);
            }
        
    }

    const showPatient=()=>{
        if(isLoggedin && user != null && user.role === 'doctor' && patients.length == 0){
            fetchPatients();
        }
        
    }
    
        
        if(user != null){
                return(
                    <div>
                        <DashboardF  info={user} patients={patients} type='doctors' />
                        <PatientsList patients={patients} />
                        <div>
                            <Link to="/dashboard/addpatient">Add Patient</Link>
                        </div>
    
                    </div>
                   
                )
        }else{
                return(<div>
                    <p>Loading...</p>
                </div>
                )
        }
        
 }


const mapStateToProps=state=>({
    user:state.data.user,
    patients:state.data.patients,
    isLoggedin:state.data.isLoggedin
 })



 export default connect(mapStateToProps,{fetchPatients,fetchUser})(withRouter(Dashboard));



    const DashboardF = ({info, patients, type})=>{
       
        return(
            <div> 
                <h1>`Dashboard of {type}`  </h1> 
                <div> 
                    <div>Info: 
                        
                            <div>
                                <p>Name: Dr. {info.name} ({info.degree})</p>
                                <p>Joined On: {info.createdAt}</p>
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    }

  