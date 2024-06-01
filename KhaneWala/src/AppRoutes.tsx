import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Layout from './layouts/layout';

const AppRoutes = () => {
  return (
  <Routes>
<Route path='/' element={<Layout>Home page</Layout>}/>
<Route path='/userProfile' element={<span>User Profile Page</span>}/>
<Route path='*' element={<span>Home page</span>}/>

  </Routes>
  )
}

export default AppRoutes
