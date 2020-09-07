import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router';
import authService from '../AuthService';
import {withRouter} from 'react-router-dom';
import {connect,useForm} from 'react-redux';
import {updatePatient } from '../actions';


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

const PatientProfile= ({isLoggedin,user,updatePatient,history})=>{
    const params=useParams();
    const [patient, setPatient]=useState(null);
    const [loading, setLoading]= useState(true);

    const getPatientData =async ()=>{
        const {data}= await authService.getPatientProfile(params.id)
        if(data != undefined && data != null){
            setPatient(data);
        }
        setLoading(false);   
    }


    
    useEffect(()=>{
        // if(!isLoggedin){
        //     history.push('/signup')
        // }else{
            if(loading){
                getPatientData();
            } 
           
        //}
        
    })

    if(loading){
        return (
            <div>Loading...</div>
        )
    }else{
        if(patient != null){
            return (
                <div>
                    <h1>Patient Profile</h1>
                    <PatientProfileComponent patient={patient} user={user} updatePatient={updatePatient} history={history}/>
                </div>   
            )
        }else{
            return(
                <div>
                    <h1>
                       User not found...
                    </h1>
                </div>
            )
        }
    }
    
   
}

const mapStateToProps= state=>({
    isLoggedin:state.data.isLoggedin,
    user:state.data.user,
});

export default connect(mapStateToProps,{updatePatient})(withRouter(PatientProfile));



const PatientProfileComponent= ({patient,user,updatePatient, history})=>{
    
    const [form] =Form.useForm();

    const onFinish= (value)=>{
        const patientUpdate={
            
            name:value.name,
            email:value.email,
            password:value.password,
            phone:value.phone,
            pincode:value.pincode,
            diagnosis:value.diagnosis,
            prescription:value.prescription,
            city:value.city,
            state:patient.state,
            role: patient.role,
            active: patient.active,
            id:patient.id
        }
       updatePatient(patientUpdate);
       goBack();
    }

    const goBack= ()=>{
        history.goBack();
    }

    console.log(patient);
        return(
            <div>
                <Form  form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                           name:patient.name,
                           email:patient.email,
                           password:patient.password,
                           phone:patient.phone,
                           pincode:patient.pincode,
                           diagnosis:patient.diagnosis,
                           prescription:patient.prescription,
                           city:patient.city
                        }}
                        scrollToFirstError>
                    <Row>
                        <Col span={6}>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </Col>

                        <Col>
                            <div>
                                <Title level={2}>Patient Info</Title>
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
                        
                        <Col span={18}>
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
                        <Col span={18}>

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
                            <Col span={12}>
                            
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
                            </Col>
                    </Row>        

                    <Divider />

                    <Row>
                        <Col  span={8} offset={16}>
                            <Space >
                                    <Button type="primary" htmlType="submit" >Save</Button>
                                    
                                    <Button type="danger" onClick={()=>goBack()}>Cancel</Button>
                            </Space>
                        </Col>           
                    </Row>
                </Form>
            </div>
        )
    
    
}
