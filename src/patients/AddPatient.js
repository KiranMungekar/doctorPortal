
import React,{useEffect,useState} from 'react'

// import {Field,reduxForm} from 'redux-form';
// import {FormFieldComponent,FormFields} from './PatientFormFields';
import _ from 'lodash';
import {addPatient,updatePatient} from '../actions';
import {useFieldArray, useForm } from 'react-hook-form';
import {connect} from 'react-redux';
import FieldArray from './FieldArray';
import {withRouter} from 'react-router-dom';


//Design;
import {  Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Space,
    AutoComplete,
    Image,Avatar,Typography, Divider } from 'antd';

    import { UserOutlined ,MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';


const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

const { Title, Paragraph, Text } = Typography;



 

const AddPatients= ({user,addPatient, history})=>{
                                         
    const onSubmit = (data) => {
        console.log(data);
        addPatient(data);
        alert('Patient Added');
        goBack();
     };
     const goBack= ()=>{
        history.goBack();
    }

    useEffect(()=>{
        if(user  == null){
            alert('User not found. Please login again.');
            goBack();
        }
    })
    const [form] =Form.useForm();
  

        if(user != null){
            return(
                <div>
                        <Form  form={form}
                        name="register"
                        onFinish={onSubmit}
                        initialValues={{
                           name:"",
                           email:"",
                           password:"",
                           phone:"",
                           pincode:"",
                           diagnosis:[],
                           prescription:[],
                        }}
                        scrollToFirstError>
                    <Row>
                        <Col span={20} offset={4}>
                            <div>
                                <Title level={2}>Add New Patient</Title>
                            </div>

                            <div>
                                <Form.Item
                                name="name"
                                label="Fullname"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Fullname',
                                },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                            </div>

                            <div>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                            </div>

                            <div>
                           
                            
                                <Form.Item
                                    name="password"
                                    label="Reset Password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    ]}
                                >
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                     
                            </div>

                            <div>

                            <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                            </div>

                            <div>
                                <Title level={4}>Address: </Title>
                                <div>
                                <Form.Item
                                    name="city"
                                    label="City"
                                    rules={[{ required: false, message: 'Please input city/town name', whitespace: true }]}
                                >
                                    <Input />
                                </Form.Item>
                                </div>

                                <div>
                                    <Form.Item
                                        name="pincode"
                                        label="Pincode"
                                        rules={[{ required: false, message: 'Please input pincode', whitespace: true }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </div>
                            </div>


                            
                        </Col>
                    </Row>
                    <Divider/ >
                    <Row>
                        
                        <Col span={20} offset={4}>
                            <Title> Reports </Title>

                            <Title level={3}> List of Dianosis </Title>
                            <Form.List name="diagnosis">
                            {(fields, { add, remove }) => {
                            return (
                                <div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                        label={index === 0 ? `Diagnosis ${index+1}` : ''}
                                        required={false}
                                        key={field.key}
                                        >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "This Field is required",
                                        },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="" style={{ width: '60%' }} />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        style={{ margin: '0 8px' }}
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                        />
                                    ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: '60%' }}
                                    >
                                    <PlusOutlined /> Add field
                                    </Button>
                                </Form.Item>
                                </div>
                            );
                            }}
                        </Form.List>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={4}>

                            <Title level={3}> List of Presciptions </Title>
                            
                            <Form.List name="prescription">
                            {(fields, { add, remove }) => {
                            return (
                                <div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                        label={index === 0 ? `Presciption ${index+1}` : ''}
                                        required={false}
                                        key={field.key}
                                        >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: "This Field is required",
                                        },
                                        ]}
                                        noStyle
                                    >
                                        <Input placeholder="" style={{ width: '60%' }} />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        style={{ margin: '0 8px' }}
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                        />
                                    ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: '60%' }}
                                    >
                                    <PlusOutlined /> Add field
                                    </Button>
                                </Form.Item>
                                </div>
                            );
                            }}
                        </Form.List>
                        </Col>
                    </Row>

                    <Divider />
                   

                    <Row>
                        <Col  span={8} offset={16}>
                            <Space >
                                    <Button type="primary" htmlType="submit" >Add Patient</Button>
                                    
                                    <Button type="danger" onClick={()=>goBack()}>Cancel</Button>
                            </Space>
                        </Col>           
                    </Row>
                </Form>
            
                </div>
            )
        }
        
        
    
    
}


const mapStateToProps =state=>({
    user: state.data.user
})

export default connect(mapStateToProps,{addPatient})(withRouter(AddPatients));




