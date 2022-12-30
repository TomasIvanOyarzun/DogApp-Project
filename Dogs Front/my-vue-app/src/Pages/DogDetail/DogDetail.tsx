import { useFetchDogByIdQuery } from '../../feactures/dog/DogSlice'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardDetail from './CardDetail';
import SliderCardDetail from './SliderCardDetail/SliderCardDetail';
import Typography from '@mui/material/Typography';
import BreadcumbsDetail from './BreadcumbsDetail';
import Stack from "@mui/material/Stack";
import Comment from './Comment/Comment';
import ImageDog from './imageDog/ImageDog';


const DogDetail = () => {
   
    const { id} = useParams()
  const { data, isSuccess } = useFetchDogByIdQuery(id)
  

  return (
    <>
  
  
     <Container >
     <Stack p={2}><BreadcumbsDetail/></Stack>
        
        <Box display='flex' alignItems='center'  marginTop='40px'>
        <Grid container spacing={3}  >
        <Grid xs={8} md={8} lg={8}   >
          <CardDetail dog={data}/>
        </Grid>
         
        <Grid item xs={4} >
          <ImageDog/>
        </Grid>
        <Grid item xs={12}>
          <Typography color='#1976d2' variant="h1">Breeds with similar temperaments</Typography>
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