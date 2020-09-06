
import React from 'react'

import {Field,reduxForm} from 'redux-form';
import {FormFieldComponent,FormFields} from './PatientFormFields';
import _ from 'lodash';




const AddPatients =({handleSubmit,valid})=>{

        return (
            <div>
                <form name="addPatientForm" onSubmit={handleSubmit}>
                   {renderFields(FormFields)}
                   <button disabled={!valid} type="submit">
                    Add Patient
                    </button>
                </form>
                {/* <Link className="btn btn-large red left" to="/"> Cancel</Link> */}
                
                
            </div>
        )
    
    
}

const renderFields=()=>{
    return _.map(FormFields, ({label, name})=>{
        return(
            <Field
                key={name}
                component={FormFieldComponent}
                type="text"
                label={label}
                name={name}
                validate={validator}
                
            />
        )
    })
}

const validator= val=>{
    if(!val || val === ''){
        return "This field is required";
    }
    return undefined;
}

const onSubmit=(val)=>{
    alert(JSON.stringify(val));
}


export default reduxForm({
    form: 'addPatientForm',
    onSubmit:onSubmit
})(AddPatients);


