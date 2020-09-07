import * as actions from '../actions/types'

import history from '../history';

const initialState= {
    user:null,
    patients:[],
    isLoggedin:false
}

export default function(state= initialState, action){
    switch(action.type){

        case actions.FETCH_USER: 
            return {
                ...state,
                user:action.payload
            }

        case actions.SIGNIN_USER:
            console.log('Reducer');
            return action.payload ? {...state, isLoggedin:action.payload} : false;


        case actions.FETCH_PATIENTS: 
            return {
                ...state,
                patients:action.payload
            };

        case actions.ADD_PATIENT: 
            return {
                ...state,
                patients:[action.payload,...state.patients]
            };

        case actions.REMOVE_PATIENT:
            const newPatient= state.patients.filter(pat=> pat.id != action.payload.id) 
            return {
                ...state,
                patients:newPatient
            }

        case actions.UPDATE_PATIENT: 
            return action.payload || null;            
         
        default:
            return state;
    }
}