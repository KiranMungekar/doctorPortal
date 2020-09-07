import React, { Component, useState } from 'react'
import authService from './AuthService';

import {connect} from 'react-redux';

import {signInUser} from './actions';
import './index.css';

//Design;

import { Layout,Button ,Typography,Input,Select} from 'antd';
const { Title,Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

const Signup= (props)=>{
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [types] = useState([
        {label:'Doctor', value:'doctor'},
        {label:'Patient', value:'patient'}
    ]);
    const [type, setType]= useState('doctor')

        return(
            <Layout>
                <Content >
                    <div className="" style={{padding: 24}}>
                        <div span={24}>
                            <Title level={2} >Login</Title>
                        </div>
                    
                    </div>
                    <div>
                        <div span={24}>
                            <Title level={5} htmlFor="email">Email</Title>
                            <Input type="text" placeholder="Email" id="email" name="email" value={email}  onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    
                    </div>
                    
                    <div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Input type="password" id="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <div style={{margin:10}}>
                            <label htmlFor="type">Login As </label>
                            <Select value={type} onChange={setType}>
                                {types.map(type=>(
                                    <Option key={type.label} value={type.value} >{type.label}</Option>
                                ))}
                            </Select>
                        </div>
                        <div style={{margin:10}}>
                            <Button className="primary"  size='large' onClick={()=>{
                            props.signInUser(email,password,type).then(({valid, id})=>{
                                if(valid){
                                    if(type === 'doctor'){
                                        props.history.push(`/dashboard/${type}/${id}`);
                                   }else{
                                       props.history.push(`/dashboard/${type}/${id}`);
                                   }
                                }else{
                                    alert('Invalid Credentials. Please enter correct credentials');
                                }
                            });
                         
                            
                        }}>Login</Button>
                        </div>
                    </div>
                
                    
                </Content>
            
            </Layout>
        )
    
}

const mapStateToProps =state=>({
    user: state.data.user
})

export default connect (mapStateToProps, {signInUser})(Signup);