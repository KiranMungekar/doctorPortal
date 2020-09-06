import * as actions from '../actions/types'

import history from '../history';

const initialState= {
    user:null,
    patients:[],
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
            return action.payload ? {...state, user:action.payload} : false;
        case actions.FETCH_PATIENTS: 
            return {
                ...state,
                patients:action.payload || []
            };

        case actions.ADD_PATIENT: 
            return action.payload || null;

        case actions.REMOVE_PATIENT: 
            return action.payload || null;

        case actions.UPDATE_PATIENT: 
            return action.payload || null;            
         
        default:
            return state;
    }
}