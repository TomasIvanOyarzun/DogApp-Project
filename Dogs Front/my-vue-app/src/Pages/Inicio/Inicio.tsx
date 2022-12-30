import React from 'react'
import CarruselN from '../../components/Carrusel/CarruselN'
import { Box } from '@mui/system'
import { Container } from '@mui/material'
import BreadcumbsInicio from './BreadcumbsInicio'
import {Grid,  Divider} from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import CardSlice from './CardInicio/CardSlice'
import dog from '../../images/Kutya-01-1.jpg'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListLanding from './CardInicio/List/ListLanding'
import { Link } from 'react-router-dom'
const Inicio = () => {
  return (
    <Container  >
      <BreadcumbsInicio/>
      <Box width='100%' display='flex' justifyContent='center'  flexDirection='column' >
        <Box  width='100%'>
        <CarruselN/>
        </Box>

        
        <Grid container spacing={2} marginTop='5px'>
        
          <Grid item xs={4}  >
            <Box height="270px"
                display="flex"
                justifyContent="center"
                flexDirection="column"
               
                >
               <Typography  variant="h3" gutterBottom>Look for Different Breeds</Typography>
               <Link to='/home' style={{textDecoration: 'none'}} ><Button style={{width: '100%'}} variant="contained">See more</Button></Link>
            </Box>
            <Divider/>
          </Grid>
        
         <Grid item xs={8}>
           <Box display='flex' height="270px" >
             <CardSlice/>
           </Box>
         </Grid>

         < Grid item xs={4}>
            <Box height='400px'>
               <img width='100%' src={dog} alt='dog-landing'></img>
               <Divider />
            </Box>
         </Grid>

          <Grid item xs={8}>
            <Box height='400px'
            display="flex"
           
            flexDirection="column"
            >
             <Typography variant="h4" gutterBottom align='center'>
             
               Help us add more breeds of dogs
             </Typography>
             <Box display='flex'>
               <Typography variant="h5" gutterBottom>Create</Typography>
           <AddCircleIcon/>
             </Box>
             <ListLanding/>
            </Box>
          </Grid>

        </Grid>
     </Box>
     </Container>
       
   
  )
}

export default Inicio