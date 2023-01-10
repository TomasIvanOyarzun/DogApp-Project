import { useFetchDogByIdQuery } from '../../feactures/dog/DogSlice'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardDetail from './CardDetail';
import SliderCardDetail from './SliderCardDetail/SliderCardDetail';

import BreadcumbsDetail from './BreadcumbsDetail';
import Stack from "@mui/material/Stack";
import Comment from './Comment/Comment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { DogApi } from '../../feactures/dog/DogSlice';

import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ListDogDetail from './ListDogDetail/ListDogDetail';


const DogDetail = () => {
   
    const { id} = useParams()
  const { data, isSuccess } = useFetchDogByIdQuery(id)
  

  return (
    <>
  
  
     <Container  maxWidth='lg'  >
     <Stack p={2}><BreadcumbsDetail/></Stack>
        
        <Box display='flex' justifyContent='center'  marginTop='20px' >
        <Grid container  >
        <Grid xs={12} md={6} lg={6}    >
        <Box width='100%'  >
        <img width='100%' height= '380px'  src={data?.image}></img>

      
                     
                      </Box>
        </Grid>

        <Grid xs={12} md={6} lg={6}     >
        <CardActions sx={{width: '100%'}}>


      <Box sx={{width: '100%' ,display: 'flex' , flexDirection: 'column', alignItems: 'center' , backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #bfbfbf 100%)', borderRadius: '5px'}}>
      <Typography marginBottom='10px' variant='h5'>characteristic of <strong>{data?.name}</strong></Typography>
      
        <Box sx={{width: '100%' ,display: 'flex' , justifyContent: 'space-evenly'}}>
          <Grid container>
          
          
          
          <Grid item xs={12} md={6} lg={6}>
        
       
        
          <Box sx={{display: 'flex' , flexDirection: 'column', width: '100%', alignItems: 'center'}} >
              <Typography gutterBottom variant="h5" component="div">Features</Typography>
             <ListDogDetail dog={data}/>
           
          
          </Box>
            </Grid>
            <Grid item xs={12}  md={6} lg={6}>
           <Box sx={{display: 'flex' , flexDirection: 'column', width: '100%', alignItems: 'center'}}>
          
             
             <Typography gutterBottom variant="h5"  color='orange' fontWeight='bold'>Temperaments</Typography>
           
           {data?.temperament.map((el,index) => (
         <Button  sx={{margin: '5px', bgcolor: '#666'}} variant="contained" key={index}>{el}</Button>
                                                                                   ))}
           </Box>
           </Grid>
           </Grid>
           </Box>
          
        </Box>
      </CardActions>
        </Grid>
         
         
        
        <Grid item xs={12}>
          
           { isSuccess && <SliderCardDetail temperaments={data.temperament }/>}
        </Grid>
        
        <Grid item xs={12} >
          <Comment />
        </Grid>
      </Grid>
      </Box>
      </Container>
      
  </>
  )
}

export default DogDetail