import React, { Component, useEffect ,useState,useCallback } from 'react'
import {Link,useParams} from 'react-router-dom';
import { useLocation } from 'react-router';
import {connect} from 'react-redux';

import {fetchUser,fetchPatients} from './actions'


class Dashboard extends React.Component {
   
    
    // componentDidMount(){
    //     console.log(this.props);
    //     if(this.props.user != null && this.props.user.role === 'doctor'){
    //         this.props.fetchPatients();
    //     }
    // }
    
        render(){
            if(this.props.user !=null){
                return(
                    <div>
                        <DashboardF  info={this.props.user} patients={this.props.patients} type='doctors' />
                        <div>
                            <Link to="/dashboard/addpatient">Add Patient </Link>
                        </div>
    
                    </div>
                   
                )
            }else{
                return(<div>
                    <p>Not found</p>
                </div>
                )
            }
        }   
 }


const mapStateToProps=state=>({
    user:state.data.user,
    patients:state.data.patients
 })



 export default connect(mapStateToProps,{fetchPatients})(Dashboard);


 

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
                    
                        <div>
                            Patients List: 
                            <div>
                                {patients.map(pat=>(
                                    <div key={pat.id}>
                                        <p>Patient Name: {pat.name} </p>
                                        <p>Email: {pat.email} </p>
                                        <p>Previous diagnosis: <ul>{ pat.diagnosis.map(dia=> (<li>{dia}</li>) ) }</ul></p>
                                        <p>Previous Prescription: <ul>{ pat.prescription.map(pre=> (<li>{pre}</li>) ) }</ul></p>
                                        <p>Address: {pat.city}, {pat.state}, zip: {pat.pincode}  </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                
                    </div>
            </div>
        )
    }

    const getDashboardInfo= async (type,id) =>{
        const response= await fetch(`https://5f1e3ff157e3290016863049.mockapi.io/api/${type}/${id}`);
        const data= await response.json();
        return data;
    }

    const getAllPatients= async ()=>{
        const response= await fetch(`https://5f1e3ff157e3290016863049.mockapi.io/api/patients`);
        const data= await response.json();
        return data;
    }