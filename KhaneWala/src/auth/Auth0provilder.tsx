import { useCreateUser } from '@/api/MyUserApi';
import {AppState, Auth0Provider, User} from '@auth0/auth0-react'
import {  useNavigate } from 'react-router-dom';


type Props ={
    children:React.ReactNode;
}



export default function Auth0provilder({children}:Props) {

    const navigate=useNavigate();
    const {createUser}=useCreateUser();

const clientId=import.meta.env.VITE_AUTH0_CLIENT_ID;
const domain=import.meta.env.VITE_AUTH0_DOMAIN;
const redirectUri=import.meta.env.VITE_AUTH0_REDIRECT_URI;


if(!domain || !clientId || !redirectUri)
    return (
console.log(clientId,domain,redirectUri)
        // throw new Error('Unable to Initialise auth');
    )



const onRedirect=(appState?:AppState,user?:User)=>{

  if(user?.sub && user?.email)
    {
      createUser({auth0Id:user.sub,email:user.email});
    }
    else
    {
      console.log('user not created')
    }
    navigate('/');

}

  return (
  <Auth0Provider
  clientId={clientId}
  domain={domain}
  authorizationParams={{
redirect_uri:redirectUri
  }}
  onRedirectCallback={onRedirect}
  >
    {children}
  </Auth0Provider>
  )
}
