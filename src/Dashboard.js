import React, { useEffect } from 'react'
import {useParams,useLocation} from 'react-router-dom';

export const Dashboard = ()=>{
    const params=useParams()

    useEffect(()=>{
       console.log(params);
    },[])




        return(
            <div> 
                <h1>`Dashboard of {params.id}`  </h1> 
            </div>
        )
}