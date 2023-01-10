import React from 'react'
import CarruselN from '../../components/Carrusel/CarruselN'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import CardSlice from './CardInicio/CardSlice'
import { Link } from 'react-router-dom'
import Welcome from './Welcome/Welcome'
import dog_black from '../../images/dog-plus-dog-black.png'
import ImageList from './ImageList/ImageList';
import { useWidthScreen } from '../../hooks/customHooks';

const Inicio = () => {

  const {width } = useWidthScreen()
 
  return (
    <>
      
      <Box width='100%' display='flex' justifyContent='center'  flexDirection='column'  >
        <Box  display='flex' width='100%' maxHeight='100vh'>
        <CarruselN/>
        </Box>

        <Box  id='welcome'  width='100%' height='100%' >
       
            <Welcome />
            
        </Box>
          <Box display='flex' width='100%' sx={{height: width < 1200 ? '100%' : '300px'}}   >
         
               <Box  sx={{width : width > 1200 ? '50%' : '100%'}} >


                <ImageList/>
               </Box>
               {width > 1200 && 
               <Box display='flex' sx={{background: '#a8ff78', backgroundImage: 'linear-gradient(to right, #78ffd6, #a8ff78)',width : width > 1200 ? '50%' : '100%'}} >
                  <img width='15%' style={{position : 'absolute',zIndex: 999, top:'160%'}} src={dog_black} alt='dog-plus-dog-black'/>
               </Box>}

          </Box>
        <Box width='100%' height='600px'  display='flex' alignItems='center' bgcolor='#FF' >
          
          <Box width='100%' height='80%' display='flex' flexDirection='column' alignItems='center' justifyContent='space-between' >
             <Typography variant='h2' fontWeight='1000'>Look for the Breed</Typography>
              <Box width='80%'>
              <CardSlice/>
              </Box>
               <Link to='/home' style={{textDecoration: 'none'}}><Button variant='contained' sx={{width: '100%', height: '50px', backgroundColor: '#8dfd9f', backgroundImage: 'linear-gradient(90deg, #8dfd9f 0%, #05942f 100%)', fontWeight: 'bold'}}  >See more Breeds</Button></Link>
              </Box>
        </Box>
        
     </Box>
     </>
       
   
  )
}

export default Inicio