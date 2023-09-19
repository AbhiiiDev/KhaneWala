import { useState } from "react";
import {useNavigate} from "react-router-dom";

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
    <div className="container">

      <form onSubmit={handleSubmit}>
        <div className="m-2 form-group">
        <label htmlFor="name">Name</label>
          <input
            type="text"
            className="m-2 form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            name="name"
            value={credentials.name}
           onChange={handleChange}
            />
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            className="m-2 form-control"
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
        <div className="m-2 form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="m-2 form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={credentials.password}
            name="password"
            onChange={handleChange}
            />
             <label htmlFor="name">location</label>
          <input
            type="text"
            className="m-2 form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            name="geolocation"
            value={credentials.geolocation}
            onChange={handleChange}
            />
  
        </div>
       
        <button type="submit" className="m-3 btn btn-dark">
          Sign Up
        </button>
      </form>
            </div>
    </>
  );
}
