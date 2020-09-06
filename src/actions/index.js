import axios from 'axios';


import {FETCH_USER,FETCH_PATIENTS} from './types';

export const fetchUser= (type, id) => async dispatch =>{
    const res= await axios.get(`https://5f1e3ff157e3290016863049.mockapi.io/api/${type}/${id}`);
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchPatients= () => async dispatch=>{
    const res= await axios.get(`https://5f1e3ff157e3290016863049.mockapi.io/api/patients`);
    dispatch({type:FETCH_PATIENTS, payload: res})
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