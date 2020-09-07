import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom';


import Signup from './Components/Signup';
import Home from './Components/Home';
import Profile from './Profile';
import ProtectedRoutes from './Components/ProtectedRoutes';
import  Dashboard  from './Dashboard';
import AddPatients from './patients/AddPatient';
import PatientProfile from './patients/PatientsProfile';
import ErrorComponent from './Components/ErrorComponent';


//Design;
import { Layout ,Typography,Space} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Title,Text } = Typography;

function App() {
  return (
    
        <Layout className="">
          
          <Header style={{display:'flex',justifyContent:'center' ,alignContent:'center', alignItems:'center'}}>
            <Title style={{alignSelf:'center' , color:'#FFFFFF'}} level={2}>Doctor Portal</Title>
          </Header>
          <Router>
            <Content  className="site-layout-background" style={{width:'100%', paddingRight:'30%', paddingLeft:'30%'}} >
              
              <Switch>
                <Route exact path="/" component={Signup} />
                <Route exact path="/signup" component={Signup} />
                
                <Route exact path="/profile/:id" component={Profile} />
                <ProtectedRoutes exact path="/dashboard/doctor/:id" component={Dashboard} />
                <ProtectedRoutes extact path="/dashboard/addpatient" component={AddPatients}/>
                <Route extact path="/dashboard/patient/:id" component={PatientProfile} />
                <Route path="**" component={ErrorComponent} />
              </Switch>
              
          </Content>
          </Router>
          <Footer style={{display:'flex', justifyContent:'end', backgroundColor:'#000000'}}>
            <Space >
              <p style={{color:'#FFFFFF'}} level={5}> Testing React with redux and Ant UI framework by <a href="https://github.com/KiranMungekar" target="_blank">@KiranM</a> </p>
            </Space>
          </Footer>
          
        </Layout>

    
      );
}

export default App;
