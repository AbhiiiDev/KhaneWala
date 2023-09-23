import React,{ useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./login.css";


export default function Login() {
let navigate=useNavigate();

const [credentials, setcredentials] = useState({
  password:"",
  email:"",
})

const handleSubmit=async(e)=>{
e.preventDefault();

const response=await fetch("http://localhost:5000/api/loginUser",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    email:credentials.email,
  password:credentials.password})
});
const json=await response.json();
console.log(json);

if(!json.success){
  alert(
    "enter correct credentials"
  )
}
if(json.success){
  localStorage.setItem("authToken",json.authToken);
  console.log(localStorage.getItem("authToken"))
  navigate("/")

}

}

const handleChange=(event)=>{
setcredentials({...credentials,[event.target.name]:event.target.value})
}

  return (
    <>
    <div className="row justify-content-center " id="login-form">

      <div className="  col-sm-6 col-lg-6 my-5 " id="form-content">
      <form onSubmit={handleSubmit}>
        
      
          <label htmlFor="Email" className="form-label mt-3 text-light  ">Email</label>
          <input
            type="email"
            className=" form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="e.g. adarsh@example.com"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            />
          <small id="emailHelp" className="form-text  d-block text-light ">
            We keep it authentic
          </small>
        
        
          <label htmlFor="Password" className="form-label mt-3 text-light ">Password</label>
          <input
            type="password"
            className=" form-control"
            id="exampleInputPassword1"
            placeholder="******"
            value={credentials.password}
            name="Password"
            onChange={handleChange}
            />
             
             <div className="form-floating my-3">
              <textarea className="form-control" id="query" cols="83" rows="40"></textarea>
              <label htmlFor="query" className="form-label">Your query...</label>

            </div>
        
        <div className="text-center">
        <button type="submit" className="m-3 btn btn-success">
          Login
        </button>

        </div>
       
      </form>
        
      </div>

      
            </div>
    </>
  );
}
