
import UserMenu from './UserMenu';
import { Button } from './ui/button'
import { useAuth0 } from "@auth0/auth0-react";


const MainNav = () => {


  const {loginWithRedirect,isAuthenticated,logout,}=useAuth0();

  return (
    <div>
{
isAuthenticated ? 

<UserMenu/>

  :
  <Button onClick={()=> loginWithRedirect()} className='text-black bg-white hover:bg-black hover:text-white text-lg font-bold'>
    LogIn
  </Button> 

}

    </div>
  )
}

export default MainNav
