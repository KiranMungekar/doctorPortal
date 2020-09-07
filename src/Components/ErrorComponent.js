import React from 'react'
import {Link} from 'react-router-dom';

const ErrorComponent = ()=>{
    return (
        <div style={{textAlign:'center'}}>
            <h1>404 Invalid </h1>
            <div>
                <p>Sorry, we could not find the request page</p>
                <p>Click here <Link to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}

export default ErrorComponent;