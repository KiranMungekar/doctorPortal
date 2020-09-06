import axios from 'axios';


import * as actions from './types';

import history from '../history';

export const signInUser= (email, password,type)=> async dispatch=>{
    console.log('SignIn actions');
    if(type==='doctor'){
        if(email === 'kiran', password === '123'){
            const res= await axios.get(`https://5f1e3ff157e3290016863049.mockapi.io/api/doctors/1`)
            dispatch({ type: actions.SIGNIN_USER, payload: res.data });
            fetchPatients();
            return true;
        }else{
            dispatch({ type: actions.SIGNIN_USER, payload: false });
            return false;
        }
    }
}

export const fetchUser= (type, id) => async dispatch =>{
    console.log('fetchingUser')
    const res= await axios.get(`https://5f1e3ff157e3290016863049.mockapi.io/api/${type}/${id}`);
    dispatch({ type: actions.FETCH_USER, payload: res.data });
}

export const fetchPatients= () => async dispatch=>{
    console.log('Patients');
    const res= await axios.get(`https://5f1e3ff157e3290016863049.mockapi.io/api/patients`);
    dispatch({type:actions.FETCH_PATIENTS, payload: res})
}

export const addPatient= (data)=> async dispatch=>{
    const postdata={
        name:data.name,
        email:data.email,
        password:data.password,
        phone:data.phone,
        diagnosis: data.diagnosis,
        prescription: data.prescription,
        pincode:data.pincode
    }

    const res= await axios.post(`https://5f1e3ff157e3290016863049.mockapi.io/api/patients`,postdata);
    console.log(res);
    dispatch({type:actions.ADD_PATIENT, payload:res});
}

export const removePatient = (id)=> async dispatch=>{
    const res= await axios.delete(`https://5f1e3ff157e3290016863049.mockapi.io/api/patients/${id}`);
    console.log(res);
    dispatch({type:actions.REMOVE_PATIENT, payload: res})
}

export const updatePatient= (data)=> async dispatch=>{
    const postdata={
        name:data.name,
        email:data.email,
        password:data.password,
        phone:data.phone,
        diagnosis: data.diagnosis,
        prescription: data.prescription,
        pincode:data.pincode
    }
    const res= await axios.put(`https://5f1e3ff157e3290016863049.mockapi.io/api/patients/${data.id}`,postdata);
    console.log(res);
    
    dispatch({type:actions.UPDATE_PATIENT, payload: res})
}

// export const handleCredits=(token)=> async dispatch=>{
//      const res= await axios.post('api/stripe', token);

//      dispatch({type: FETCH_USER, payload: res.data});
// }

// export const submitSurvey= (values, history)=>async dispatch=> {
//     const res =  await axios.post('/api/surveys', values);
//      history.push('/Dashboared');
//      dispatch({type:FETCH_USER, payload:res.data});

//     return {type:'submit_survey'};
// }