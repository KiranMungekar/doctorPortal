import React, {useEffect } from 'react'
import {Link,useParams,withRouter} from 'react-router-dom';
import { useLocation } from 'react-router';
import {connect} from 'react-redux';
import PatientsList from './patients/PatientsList';
import {fetchUser,fetchPatients} from './actions'

import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Dashboard = ({user,isLoggedin, patients,fetchPatients,fetchUser,match,history})=> {
   const params=useParams();
    
   useEffect(()=>{
        
        if(!isLoggedin){
            console.log('Redirect Back to Signup' + isLoggedin)
            history.push('/signup');
        }else{
            showDashboard();
            if(isLoggedin && user != null && user.role === 'DOCTOR' && patients.length == 0){
                fetchPatients();
            }
        }
    });


    const showDashboard=()=>{
        
            if(isLoggedin && user == null){
                fetchUser(params.type, params.id);
            }
        
    }

    
        
        if(user != null){
                return(
                    <div>
                        <DashboardF  info={user} patients={patients} type='doctors' />
                        <div>
                            {patients.length}
                        </div>
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
                <Title level={2} >Dashboard of Doctors  </Title> 
                
                <Divider />
                <div> 
                    <div>
                            <div>
                                <p><Title level={5} >Name:</Title> <Title level={5} strong> Dr. {info.name} ({info.degree})</Title> </p>
                                <p><Title level={5} >Joined On:</Title> <Title level={5} strong>{info.createdAt}</Title> </p>
                            </div>
                        
                    </div>
                    
                    <Divider />
                </div>
            </div>
        )
    }

  