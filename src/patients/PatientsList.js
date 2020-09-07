
import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {removePatient} from '../actions'
import { EditOutlined,DeleteOutlined  } from '@ant-design/icons';
import { Typography, Divider,Skeleton, Switch, Card, Avatar } from 'antd';
const { Title, Paragraph, Text } = Typography;



const { Meta } = Card;

const PatientsList = ({patients,removePatient,history})=>{


    const openPatientProfile=(id)=>{
        history.push(`/dashboard/patient/${id}`)
    }

    if(patients.length > 0 ){
        return(
            <div> Patients List: 
                                <div>
                                    {patients.map(pat=>(
                                            <div>
                                                <Card 
                                                    hoverable
                                                    key={pat.id} 
                                                    style={{ width: 500, marginTop: 16 }}
                                                    actions={[
                                                        <EditOutlined key="edit" onClick={()=>openPatientProfile(pat.id)} />,
                                                        <DeleteOutlined key="delete" onClick={()=>{removePatient(pat.id)}} />
                                                      ]}
                                                    >
                                                    <Meta
                                                        avatar={
                                                            <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAASFBMVEXc3NxmZmb///+6urp7e3vGxsaurq7R0dHAwMChoaHt7e12dnaZmZnLy8uWlpbp6enz8/OCgoKoqKiKioq0tLTj4+P5+fmQkJCmYSIQAAAEfklEQVR4nO2ca8ObIAyFFe/Wqq3W/f9/OqndXnoV4WCyLs+nfdo4wyQkcBpFgiAIgiAIgiAIgiAIgiAIgmBPllftEF8Z2irPqNfjxPF8k2AynI/U69pIfnpWsXDKqddmT1G9U7FQFdQrtOP8WYbmTL1GC8rDuo44PpTU61yjsZGhaahX+pHj2xh/ZmCcwMrUXkccp2w/r2SLDE1CveLXbNbBVImDDpZKShcdccwuTo6b4vyHlFvu+uWmY87C1Cu/x7oOPsOqMjoGyAKnMHEMkIWUevU/WJx3P8HmLFz46YhjLv2J54bw2RJfHXFMrWAh9xfCo49/MS3ZCouqePTXEcccDiojQshIrWKmRQhpqVVEiJyloVYRRRlGCP1c2KkxfIa+VQRUEQ19JVmZ89pSUevAJC0OaQujg0HaEiEiRIT8J0K+Jv1+TUGEtCMcGhKvIeMPDMaNGCHUKqKoxgipqXV8UasL6azo+6oouiCEXKhVzNSIAR2DEIGMH+hHD5rJX8hErWHBu7jTl/UF71LCIkJmOs8MnHTUCv4w+V2GMomQKz5CqNdu0ntcI5576tWbTM5VseX0Yc10ro9q2AT6jdoxTCIuqfcvvdOzgYJVgCy4KOGow0UJTx2zkm2vhNKIqY5ZSbeh7x06tjrm3KWsK+NZ8clX2Vi1+g25aaOY7D6vNDLq4NWmcWqrkaS/KhvDlmBcZfbK4iycKOOzMq5TD83eg7r8wVxxMv4zp36l0xp7YzuyB1/AYc/73UcZGuPxWDep7O3Za8jUZBxLXsTUblKOrxd5522ZVJe8yGBt0inzkPjGNbOPI+P9d3P3greelLrodHCTMIfyRanpLlW9fy28Qxf/6T7k8PDv19M0y1mY//iQb8dPJqbg9yUr9zqtdQbNVmpnYCXr91N2UtZkhFZiNcE6rU6kEysrVsA4sR6OVh/qWml96xiu0G9ozA9N8uJ9dZE0VjbFhWBvT7d6K05NXmY3OUVW5s0Gc9+VQI4M0KO/LYT5uAD3IFsJ8nGBHi9uI8SVHMGGBNkSkg0JsSUkGxJgS4g2BL8lHv48P8C1xNtG5Q7WgAV6zOQC9uxIFOoaaLgTflnYbwv0uswN5KgL9HDRDWSrSKkDee1LcIA3wR3mycr6Aq64e5tx/cBZeb1eaPgDM7yTVhENqpJ8jRDiWMdFO3Gs46KdtK5rULWdWgestlPLQAkhPqBoMIcU8uyLyr/k2ReVf0m7qgVMbwUyevuAuXknLyOoQiJCuAkBeT99wFiwqFVoRIgICYQIESGBECEmxOM5DWZE9zVHFPJpEGoe9DWNFYNox+gA/RiCDyBjA3mQoEam5PMg1DS+p77ogVl/vuYy1M8d7QvSXQ354VVXkB6MnvCYUkHNcXQfF9q27+qO9taBdlfXNErSDu5WrLe4PlG0eB2bXJ8oQrlHp31fBA5RsF9R6FWxm5ShUCFNyb26jDtEfTpegsrQ1JPqiqQKViGrKik69Wj1C6SlN/yFaOa/uudjEBcEQRAEQRAEQRAEQRAEQfg3+Q1RyUi5g1z5jwAAAABJRU5ErkJggg=="/>
                                                        }
                                                        title={pat.name}
                                                        description={pat.email} />
                                                   
                                                </Card>
                                            <Divider />        

                                            </div>                                         
                                       
                                    ))}
                                </div>
            </div>
            
        )
    }else{
       return(<div>Loading...</div>)
    }
   
}


const displayArrayField = (data)=>{
    if(data != null && data.length > 0){
        return(
            <ul>
                {data.diagnosis.map(dia=> (<li>{dia.name}</li>) ) }
            </ul>
        )
    }else{
       return ( <div>
            <p>No record found</p>
        </div>)
    }
}
const mapStateToProps= state=>({

})

export default connect(mapStateToProps, {removePatient})(PatientsList);