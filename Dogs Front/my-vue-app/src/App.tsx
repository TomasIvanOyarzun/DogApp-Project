import React from 'react'
import Home from './Pages/Home/Home'
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav/Navbar'
import DogDetail from './Pages/DogDetail/DogDetail'
import Box from '@mui/material/Box';
import Inicio from './Pages/Inicio/Inicio';
import AlertText from './components/AlertText/AlertText'
import { useAppSelector } from './hooks/toolkitHooks'
import Footer from './components/Footer/Footer'
import Register from './Pages/register/Register'
function App() {
  const active = useAppSelector(state => state.user.active)
  
  return (

   <div style={{width: '100%' , background: '#ebebeb'}}>
      <Nav/>
      {localStorage.getItem("user") && active && <AlertText msg='You have successfully logged in'  />}
      <Box  >
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/dog/:id' element={<DogDetail/>} />
          <Route path='/' element={<Inicio/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Box>
      <Footer/>
    </div>

      
  )
}

export default App