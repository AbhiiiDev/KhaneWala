
import {Routes,Route} from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';

const AppRoutes = () => {
  return (
  <Routes>
<Route path='/' element={<Layout><HomePage/></Layout>}/>
<Route path='/login' element={<span>User Profile Page</span>}/>
<Route path='*' element={<span>Home page</span>}/>

  </Routes>
  )
}

export default AppRoutes
