
import React,{useEffect,useState} from 'react'

// import {Field,reduxForm} from 'redux-form';
// import {FormFieldComponent,FormFields} from './PatientFormFields';
import _ from 'lodash';
import {addPatient,updatePatient} from '../actions';
import {useFieldArray, useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import FieldArray from './FieldArray';
import {withRouter} from 'react-router-dom';



var defaultValues= {
    name: "",
    email: "",
    password: "",
    phone:"",
    diagnosis:diagnosisField,
    prescription:presciptionField,
    pincode:""
} 

var diagnosisField={
    dia:[
        {
          name:"dia"
        }
    ]
}
 
var presciptionField={
     pres:[
         {
           name:"pres"
         }
     ]
}
 

const AddPatients= ({user,addPatient,updatePatient, history})=>{
    const [loading, setLoading]= useState(true);
    
    
                                                            
    const [initDiagnos, setInitialDiagnos] =new useState({
                                                            dia:[
                                                                {
                                                                name:"dia"
                                                                }
                                                            ]
                                                        });

    const [initPrescription, setInitialPrescription] =new useState({
                                                            pres:[
                                                                {
                                                                name:"pres"
                                                                }
                                                            ]
                                                        });
    const [intialValues, setInitialValues] = new useState({ name: "",
                                                        email: "",
                                                        password: "",
                                                        phone:"",
                                                        diagnosis:initDiagnos,
                                                        prescription:initPrescription,
                                                        pincode:"" });                                                      

    const {control, register, handleSubmit, getValues, errors}= useForm(intialValues);                                                    


    
                                                            
    const onSubmit = handleSubmit((data,e) => {
        
        
        console.log(data);
        addPatient(data);
        alert('Patient Added');
        history.goBack();
     });

     


    const preFillForm=(userData)=>{
        console.log('Prefilled data');
        setInitialPrescription(userData.prescription);
        setInitialDiagnos(userData.diagnosis);
       // presciptionField.pres= userData.prescription;

        setInitialValues({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            phone:userData.phone,
            diagnosis:diagnosisField,
            prescription:presciptionField,
            pincode:userData.pincode
        })
        setLoading(false);
    }

    useEffect(() => {
        if(user != null){
            setUpData(user);
        }else{
            console.log('Redirect Signup');
            history.push('/signup');
        }
        
     }, [])

    
    
     const setUpData=(user)=>{
        if(user.role === 'PATIENT'){
            preFillForm(user);
        }else{
            setLoading(false);
        }
     }
  
    
    if(loading){
        return (
            <div>
                <h1>Loading ...</h1>
            </div>
        )
    }else{
        if(user != null){
            return(
                <div>
                    <form method="POST" onSubmit={onSubmit}> 
                        <div>
                            <label>Name</label>
                            <input  name="name"  ref={ register}/>
                        </div>  
                        <div>
                            <label>Email</label>
                            <input name="email"  ref={ register}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input name="password" type="password"  ref={ register}/>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input name="phone"  ref={register}/>
                        </div>
                        <div>
                            <label>Diagnosis</label>
                            <FieldArray
                                {...{ control,
                                    register,
                                    intialValues,
                                    getValues,
                                    errors,
                                    fieldName: "diagnosis" }}
                            />
                        </div>
        
                        <div>
                            <label>Prescription</label>
                            <FieldArray
                                {...{ control,
                                    register,
                                    intialValues,
                                    getValues,
                                    errors,
                                    fieldName: "prescription" }}
                            />
                        </div>
                        <div>
                            <label>Pincode</label>
                            <input name="pincode" ref={register}/>
                        </div>
                       
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        }
        
        
    }
    
}


const mapStateToProps =state=>({
    user: state.data.user
})

export default connect(mapStateToProps,{addPatient})(withRouter(AddPatients));




