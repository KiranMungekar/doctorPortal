import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router';
import authService from '../AuthService';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import AddPatients from './AddPatient';

const PatientProfile= ({isLoggedin,user,history})=>{
    const params=useParams();
    const [patient, setPatient]=useState(null);
    const [loading, setLoading]= useState(true);

    const getPatientData =async ()=>{
        const {data}= await authService.getPatientProfile(params.id)
        if(data != undefined && data != null){
            setPatient(data);
        }
        setLoading(false);
        
    }


    
    useEffect(()=>{
        // if(!isLoggedin){
        //     history.push('/signup')
        // }else{
            if(loading){
                getPatientData();
            } 
           
        //}
        
    })

    if(loading){
        return (
            <div>Loading...</div>
        )
    }else{
        if(patient != null){
            return (
                <div>
                    <h1>Patient Profile</h1>
                    <PatientProfileComponent patient={patient} user={user} />
                </div>   
            )
        }else{
            return(
                <div>
                    <h1>
                       User not found...
                    </h1>
                </div>
            )
        }
    }
    
   
}

const mapStateToProps= state=>({
    isLoggedin:state.data.isLoggedin,
    user:state.data.user,
});

export default connect(mapStateToProps,{})(withRouter(PatientProfile));



const PatientProfileComponent= ({patient,user})=>{
    
    console.log(patient);
        return(
            <div>
                <h1>
                   <AddPatients />
                </h1>
            </div>
        )
    
    
}