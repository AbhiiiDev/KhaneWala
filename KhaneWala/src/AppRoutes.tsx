
import {Routes,Route} from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import AuthCallBackPage from './pages/AuthCallBackPage';
import UserProfilePage from './pages/UserProfilePage';

const AppRoutes = () => {
  return (
  <Routes>
<Route path='/' element={<Layout><HomePage/></Layout>}/>
<Route path='/userProfile' element={<UserProfilePage/>}/>
<Route path='/auth-callback' element={<AuthCallBackPage/>}/>
<Route path='*' element={<span>Home page</span>}/>

  </Routes>
  )
}

export default AppRoutes
