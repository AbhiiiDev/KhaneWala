import { useState } from "react";
import {useNavigate} from "react-router-dom";
import './SignUp.css';

export default function SignUp() {
 let navigate=useNavigate();

const [credentials, setcredentials] = useState({
  name:"",
  password:"",
  email:"",
  geolocation:""
})

const handleSubmit=async(e)=>{
e.preventDefault();

const response=await fetch("http://localhost:5000/api/createUser",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name:credentials.name,
    email:credentials.email,
  password:credentials.password,
location:credentials.geolocation  })
});
const json=await response.json();
console.log(json);

if(!json.success){
  alert(
    "enter valid credentials"
  )
}
if(json.success){
  navigate("/");
}

}



const handleChange=(event)=>{
setcredentials({...credentials,[event.target.name]:event.target.value})
}

  return (
    <>
    <div className="row justify-content-center  " id="signUp-form">

      <div className="col-6 p-3 mt-5" id="signUp-content">

      <form onSubmit={handleSubmit}>
        
        <label htmlFor="name" className="mb-1">Name</label>
          <input
            type="text"
            className=" mb-3 form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            name="name"
            value={credentials.name}
           onChange={handleChange}
            />
          <label htmlFor="Email" className="mb-1">Email</label>
          <input
            type="email"
            className=" form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            />
          <small id="emailHelp" className="form-text text-muted d-block mb-3">
            We'll never share your email with anyone else.
          </small>
        
        
          <label htmlFor="Password" className="mb-1">Password</label>
          <input
            type="password"
            className=" mb-3 form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={credentials.password}
            name="password"
            onChange={handleChange}
            />
             <label htmlFor="name" className="mb-1">location</label>
          <input
            type="text"
            className="mb-3  form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            name="geolocation"
            value={credentials.geolocation}
            onChange={handleChange}
            />
  
      
       <div className="text-center">
       <button type="submit" className="m-3 btn btn-dark">
          Sign Up
        </button>

       </div>
        
      </form>

      </div>

      
            </div>
    </>
  );
}
