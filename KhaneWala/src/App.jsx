import Login from './screens/Login'

import {
 Routes,
 BrowserRouter as Router,
Route
} from 'react-router-dom';


import './App.css'

import Home from './screens/Home'
import SignUp from './screens/SignUp';
import CartProvider from './components/ContextReducer';



function App() {

  
  return (
 <Router>
  <div>

<CartProvider>

<Routes>
  <Route  path='/' element={<Home/>}/>
  <Route  path='/login' element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>
</Routes>
</CartProvider>

  </div>
 </Router>
       


  )
}

export default App
