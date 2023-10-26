import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const initialValue = {
        "username":"",
        "password":""
    }
const[credential,setCredentail] = useState(initialValue);
const[isLoading,setIsLoading] = useState(false)

const handleChange = (e)=>{
    const{name,value} = e.target;
    setCredentail(
        {...credential,[name]:value}
    )
}


const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(credential,"cred")
 


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(credential);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    setIsLoading(false);
    
    fetch("https://fakestoreapi.com/auth/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        setIsLoading(true);
        navigate("/products")

        console.log(result.token,"token")
        localStorage.setItem("token",JSON.stringify(result.token))
        
        
      })
      .catch(error => console.log('error', error));

  
}

  return (
    <div className="container">
        <div className="row h-100">
            <div className="col col-md-6 h-100" >
             <h3 className="mt-3">Welcome to Excellent webWorld</h3>
             <img src="./login_left.png" alt="" width="80%" />
            
            </div>
            <div className="col col-md-6 h-100 mb-0"  >
       <h3 className="fw-bold mt-3 text-center">Login Form</h3>
      <form onSubmit={(e)=>handleSubmit(e)} style={{marginBottom:"2px"}}>
        <div className="form-group mt-5">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control" name="username" value={credential.username} onChange={(e)=>handleChange(e)}/>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" name="password" value={credential.password} onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="d-flex justify-content-center align-item-center mt-2">
        <button type="submit" className="btn btn-outline-dark py-1 mt-3" >
          Login
        </button>
      
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />

        <br />
      </form>
      

      <p>Didn't have an account?<span style={{color:"blue",marginLeft:"10px"}}>Please Contact to admin </span></p>
      </div>
      </div>
    </div>
  );
};

export default Login;
