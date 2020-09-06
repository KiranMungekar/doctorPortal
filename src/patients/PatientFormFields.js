import React from 'react'


export const FormFields= [
    {
        'label':'Patients Name', name:'name',
        
    },
    {
        'label':'Email', name:'email',
        
    },
    {
        'label':'Phone', name:'phone'
    },
    {
        'label':'Diagnosis', name:'diaglosis'
    },
    {
        'label':'Prescriptions', name:'prescription'
    },
    {
        'label':'ZipCode', name:'zipcode'
    }

];



export const FormFieldComponent=({input, label, meta:{error,touched}})=>{
    return(
        <div>
            <label>{label}</label>
            <input {...input} />
            <div className="red-text" style={{marginBottom:'10px'}}>{touched && error}</div>
        </div>
    )

}




