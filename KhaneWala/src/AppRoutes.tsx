
import {Routes,Route, useSearchParams} from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import AuthCallBackPage from './pages/AuthCallBackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';
import { useState } from 'react';
import RestaurantPage from './pages/RestaurantPage';

const AppRoutes = () => {

const [isHero,setIsHero]=useState(false);

  return (
  <Routes>
<Route path='/' element={<Layout isHero={true}><HomePage /></Layout>}/>
<Route path='/auth-callback' element={<AuthCallBackPage/>}/>
<Route element={<ProtectedRoute/>}>
<Route path='/userProfile' element={<Layout isHero={false}><UserProfilePage /></Layout>}/>
<Route path='/manageRestaurant' element={<Layout isHero={false}><RestaurantPage/></Layout>}/>
</Route>

<Route path='*' element={<Layout isHero={true}><HomePage /></Layout>}/>

  </Routes>
  )
}

export default AppRoutes
