import React,{ useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


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
  navigate("/")
}

}

const handleChange=(event)=>{
setcredentials({...credentials,[event.target.name]:event.target.value})
}

  return (
    <>
    <div className="container">

      <form onSubmit={handleSubmit}>
        <div className="form-group">
      
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={credentials.password}
            name="password"
            onChange={handleChange}
            />
             
  
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
            </div>
    </>
  );
}
