import { combineReducers} from 'redux';
import AddPatients from './AddPatientReducer';
import { reducer as reduxForm} from 'redux-form';
 


 export default combineReducers ({
     data: AddPatients,
     form: reduxForm
 });