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
import PatientProfile from './patients/PatientsProfile';

//Design;
import { Layout,Button ,Typography,Row, Col} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Title,Text } = Typography;

function App() {
  return (
    
        <Layout className="App">
          <Router>
          <Header>
            <Title level={2}>Doctor Portal</Title>
          </Header>
          <Content className="App-container">
              
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                
                <ProtectedRoutes exact path="/profile/:id" component={Profile} />
                <ProtectedRoutes exact path="/dashboard/doctor/:id" component={Dashboard} />
                <ProtectedRoutes extact path="/dashboard/addpatient" component={AddPatients}/>
                <ProtectedRoutes extact path="/dashboard/patient/:id" component={PatientProfile} />
                 {/* <Route path="/profile" component={Profile} /> */}
              </Switch>
              
          </Content>
          </Router>
        </Layout>

    
      );
}

export default App;
