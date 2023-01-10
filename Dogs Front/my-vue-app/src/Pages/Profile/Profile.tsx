import React from 'react'
import axios from 'axios'
import { Box } from '@mui/system'
import Panel from './Panel/Panel'
import { Outlet } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useWidthScreen } from '../../hooks/customHooks'

const Profile = () => {
   
  const {width} = useWidthScreen()


  
  return (
    <Box sx={{display: 'flex' , flexDirection:'column', width: '100%' , height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F5F4'}}>



             
        <Box  sx={{display: 'flex' , alignItems: 'center', width: '100%' , height: '100%' }} >
       
           {width > 599 && <Panel/>}
         
     <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: width > 699 ? 'space-between' : 'center', alignItems: 'center', width : '100%' , height :'90%'}}>
        
        <Outlet/>
     </Box>
     </Box>
    </Box>
  )
}

export default Profile