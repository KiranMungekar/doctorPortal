import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPatients} from '../actions'


const PatientsList = ({patients})=>{

    if(patients != null && patients.length > 0 ){
        return(
            <div> Patients List: 
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
            
        )
    }else{
       return(<div>No Patients found</div>)
    }
   
}


export default PatientsList;