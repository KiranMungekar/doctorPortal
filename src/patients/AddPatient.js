
import React from 'react'

// import {Field,reduxForm} from 'redux-form';
// import {FormFieldComponent,FormFields} from './PatientFormFields';
import _ from 'lodash';
import {addPatient} from '../actions';
import {useFieldArray, useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import FieldArray from './FieldArray';
import {withRouter} from 'react-router-dom';


const diagnosisField={
   dia:[
       {
         name:"dia"
       }
   ]
}

const presciptionField={
    pres:[
        {
          name:"pres"
        }
    ]
 }

 const defaultValues= {
    name: "",
    email: "",
    password: "",
    phone:"",
    diagnosis:diagnosisField,
    prescription:presciptionField,
    pincode:""
  }

const AppPatients= ({addPatient,history})=>{
    const {control, register, handleSubmit, getValues, errors}= useForm(defaultValues);

      const onSubmit = handleSubmit((data,e) => {
        console.log(data);
        addPatient(data);
        alert('Patient Added');
        history.goBack();
     });

  

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
                            defaultValues,
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
                            defaultValues,
                            getValues,
                            errors,
                            fieldName: "prescription" }}
                    />
                </div>
                <div>
                    <label>Pincode</label>
                    <input name="pincode" ref={ register}/>
                </div>
               
                <button type="submit">Add Patient</button>
            </form>
        </div>
    )
}


const mapStateToProps =state=>({
    user: state.data.user
})

export default connect(mapStateToProps,{addPatient})(withRouter(AppPatients));

// const AddPatients =({handleSubmit,valid,history})=>{

//         return (
//             <div>
//                 <form name="addPatientForm">
//                    {renderFields(FormFields)}
//                    <button disabled={!valid} type="submit" onClick={onSubmit}>
//                         Add Patient
//                     </button>
//                 </form>
//                 {/* <Link className="btn btn-large red left" to="/"> Cancel</Link> */}
                
                
//             </div>
//         )
    
    
// }

// const renderFields=()=>{
//     return _.map(FormFields, ({label, name})=>{
//         return(
//             <Field
//                 key={name}
//                 component={FormFieldComponent}
//                 type="text"
//                 label={label}
//                 name={name}
//                 validate={validator}
                
//             />
//         )
//     })
// }

// const validator= val=>{
//     if(!val || val === ''){
//         return "This field is required";
//     }
//     return undefined;
// }

// const onSubmit=(val)=>{
//     console.log(val);
// }


// export default reduxForm({
//     form: 'addPatientForm',
   
// })(AddPatients);


