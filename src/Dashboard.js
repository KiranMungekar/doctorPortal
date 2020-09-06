import React, { Component, useEffect ,useState} from 'react'
import {useParams} from 'react-router-dom';
import { useLocation } from 'react-router';




 const Dashboard = ()=> {
    const paramsData=useParams()


    const [dashboardInfo, setDashboardInfo]= useState(null);
    const [patients, setPatients]= useState([]);
    const [params, setParams] = useState(paramsData);
   


     useEffect(()=>{
        console.log(params);
        setValues();
     },[]);


        const setValues = ()=>{
            fetchDashboardInfo();
            if(params.type === 'doctors'){   
                fetchPatients();
            }
        }
      


        const fetchDashboardInfo= async ()=>{
            const res= await getDashboardInfo(paramsData.type,paramsData.id);
            setDashboardInfo(res);
        }

        const fetchPatients = async ()=>{
            const data= await getAllPatients();
            setPatients(data);
        }

        if(dashboardInfo !=null){
            return(
                <div>
                    <DashboardF  info={dashboardInfo} patients={patients} type={params.type} />
                </div>
               
            )
        }else{
            return(<div>
                <p>Not found</p>
            </div>
            )
        }
       
    
 }

 export default Dashboard;

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
                                    <div>
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