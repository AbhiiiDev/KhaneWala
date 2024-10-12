import  { useEffect } from 'react'
import { useCreateUser } from '@/api/MyUserApi'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';



export default function AuthCallBackPage() {
const {createUser}=useCreateUser();
const navigate=useNavigate();
const {user}=useAuth0();

  useEffect(()=>{
   
  if(user?.sub && user?.email)
    {
      createUser({auth0Id:user.sub,email:user.email});
    }
    else
    {
      console.log('user not created')
    }
    navigate('/');

  },[])





  return (
    <div>
      Loading....
    </div>
  )
}
