import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPatients} from '../actions'


const PatientsList = ({patients})=>{

    if(patients.length > 0 ){
        return(
            <div> Patients List: 
                                <div>
                                    {patients.map(pat=>(
                                        <div key={pat.id}>
                                            <div>Patient Name: {pat.name} </div>
                                            <div>Email: {pat.email} </div>
                                            <div>Previous diagnosis: <displayArrayField data={pat.diagnosis} /></div>
                                            <div>Previous Prescription: <displayArrayField data={pat.prescription} /> </div>
                                            <div>Address: {pat.city}, {pat.state}, zip: {pat.pincode}  </div>
                                        </div>
                                    ))}
                                </div>
            </div>
            
        )
    }else{
       return(<div>No Patients found</div>)
    }
   
}


const displayArrayField = (data)=>{
    if(data != null && data.length > 0){
        return(
            <ul>
                {data.diagnosis.map(dia=> (<li>{dia.name}</li>) ) }
            </ul>
        )
    }else{
       return ( <div>
            <p>No record found</p>
        </div>)
    }
}

export default PatientsList;