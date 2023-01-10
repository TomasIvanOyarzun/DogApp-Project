import React from 'react'

import dog_one from '../../images/dog-banner-1.png'
import dog_two from '../../images/dog-banner-2.png'
import Grow from '@mui/material/Grow';
import { Box, } from '@mui/system';
import Typography from '@mui/material/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import zIndex from '@mui/material/styles/zIndex';
import Button from '@mui/material/Button';
import { useWidthScreen } from '../../hooks/customHooks';

const CarruselN = () => {
  const [checked, setChecked] = React.useState(false);

  const {width } = useWidthScreen()
 
  return (
    <>



    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} >
           
                {[dog_one, dog_two].map(el => (<div style={{display: 'flex', height: width > 1600 ? '100vh' : '100%', justifyContent: 'space-between', alignItems: 'center', width: '100%' , backgroundColor: '#a9fb73', backgroundImage: 'linear-gradient(90deg, #a9fb73 0%, #ffffff 94%)'}}>
                    <div style={{ position: 'relative', width: '70%', left: '0%'}}><img   src={el} /></div>
                   { width > 1300 && <div style={{width : '50%'  , top: '30%', marginRight: '30px'}} >
                         <Typography variant='h1' fontFamily='revert-layer' fontWeight='1000'>Learn all breeds of Dogs</Typography>
                         <Typography variant='h5' fontFamily='revert-layer' fontWeight='300'>Find the ideal dog for you, get information on all dogs
                          classified by breed, and more</Typography>
                         <a style={{listStyle : 'none', textDecoration: 'none'}} href='#welcome'> <Button variant='contained' sx={{width: '20%', height: '50px', backgroundColor: '#8dfd9f', backgroundImage: 'linear-gradient(90deg, #8dfd9f 0%, #05942f 100%)', fontWeight: 'bold'}}>See more</Button></a> 

                    </div>}
                  
                   
                </div>))}
                
               
            </Carousel>
           
  
            </> 
    
  )
}

export default CarruselN