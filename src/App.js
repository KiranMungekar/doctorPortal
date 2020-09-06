import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom';


import Signup from './Signup';
import Home from './Home';
import Profile from './Profile';
import ProtectedRoutes from './ProtectedRoutes';
import  Dashboard  from './Dashboard';
import AddPatients from './patients/AddPatient';



function App() {
  return (
    
        <div className="App">
          <Router>
          <header className="App-header">
            Doctor Portal
            {/* <div> 
              <Link to="/">Home</Link>
              <Link to="/signup" >Signup</Link>
              <Link to="/profile">Profile</Link>
            </div> */}
          </header>
          <div className="App-container">
              
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                
                <ProtectedRoutes exact path="/profile/:id" component={Profile} />
                <ProtectedRoutes exact path="/dashboard/:type/:id" component={Dashboard} />
                <ProtectedRoutes extact path="/dashboard/addpatient" component={AddPatients}/>

                {/* <Route path="/profile" component={Profile} /> */}
              </Switch>
              
          </div>
          </Router>
        </div>

    
      );
}

export default App;
