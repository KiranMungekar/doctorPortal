
import React from 'react'

import {Field,reduxForm} from 'redux-form';
import {FormFieldComponent,FormFields} from './PatientFormFields';
import _ from 'lodash';




class AddPatients extends  React.Component{


    renderFields =()=>{
        return _.map(FormFields, ({label, name})=>{
            return(
                <Field
                    key={name}
                    component={FormFieldComponent}
                    type="text"
                    label={label}
                    name={name}
                />
            )
        })
    }

    render(){
        return (
            <div>
                <form name="addPatients">
                   {this.renderFields(FormFields)}
                </form>
                {/* <Link className="btn btn-large red left" to="/"> Cancel</Link> */}
                        <button className="btn btn-large right" type="submit">
                            <i className="material-icons plus">forward</i>    
                            Add Patient
                        </button>
                
            </div>
        )
    }
    
}


export default reduxForm({
    form: 'addPatients',
})(AddPatients);


