
import React from 'react'
import {Grid,  Divider} from '@mui/material'
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import size from '../../../images/size.png'
import Avatar from '@mui/material/Avatar';



const material = [{name : 'breed name', description : 'All the names of the dogs are the names of the breed specifically' , icon : <PetsIcon sx={{bgcolor: '#ff'}} fontSize='large'/> },
{name : 'Image', description : 'may include a personalized image of said race created', icon : <AddPhotoAlternateIcon sx={{bgcolor: '#ff'}} fontSize='large' />},
{ name : 'Temperament' , description : 'You can choose the general temperament of that specific breed', icon : <ThermostatIcon sx={{bgcolor: '#ff'}} fontSize='large' /> },
{name : 'Size' , description : 'You can also specify the size of the breed' , icon : <DesignServicesIcon sx={{bgcolor: '#ff'}} fontSize='large' />}
]
const Welcome = () => {
  return (

    <Grid container spacing={1} bgcolor='#fff' marginBottom={5} style={{position: 'relative' , zIndex: 1}}  >
        <Grid item xs={12} md={4}>
              <img width='100%' src='https://www.maricopa.gov/ImageRepository/Document?documentId=77037' alt='dog-welcome'/>
        </Grid>
        <Grid item xs={12} md={8}>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' width='100%' height='100%'>
                 <Typography fontWeight='bold' color='#111' variant="h2"  sx={{textAlign: 'center'}} gutterBottom>Welcome Dog-APP</Typography>
                 <Box width='80%'>
                 <Typography variant="h5" fontWeight="bold" gutterBottom>Find all breeds of dogs, and if you are a user, you can also create your own.</Typography>

                
                 <Grid container spacing={2}>
                
                {material.map(el => (
                  <Grid item xs={12} md={6}  >
                  <Box display='flex' width='100%' height='100%' bgcolor='rgba(0, 0, 0, 0.056)' borderRadius= '4px' >
                     <Box>
                     <Avatar sx={{ backgroundColor: '#a2fbb0', backgroundImage: 'linear-gradient(90deg, #a2fbb0 0%, #05942f 100%)', margin : '12px', width: '60px' , height: '60px'}}>
                     {el.icon}
                      </Avatar>
                      
                     </Box>
                     <Box  width="100%">
                      <Typography fontFamily='Segoe UI' variant='h5' fontWeight='700'>{el.name}</Typography>
                      <Typography margin='10px' color='#666'>{el.description}</Typography>
                     </Box>
                  </Box>
                    </Grid>
                ))}
               
                 </Grid> 
                 </Box>
                 
            </Box>
        </Grid>
              
      </Grid>
  )
}

export default Welcome