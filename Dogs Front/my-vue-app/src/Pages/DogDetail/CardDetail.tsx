import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { DogApi } from '../../feactures/dog/DogSlice';
import Box from '@mui/material/Box';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ListDogDetail from './ListDogDetail/ListDogDetail';
interface Props {
    dog : DogApi | undefined
}
const CardDetail = ({dog} : Props) => {
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          image={dog?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {dog?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{width: '100%' ,display: 'flex' , justifyContent: 'space-evenly'}}>
          <Box sx={{display: 'flex' , flexDirection: 'column'}} >
              <Typography gutterBottom variant="h5" component="div">Temperaments</Typography>
           
                 {dog?.temperament.map((el,index) => (
               <Button sx={{margin: '5px'}} variant="contained" key={index}>{el}</Button>
                                                                                         ))}
           
           
          </Box>

           <Box sx={{display: 'flex' , flexDirection: 'column'}}>
           <Typography gutterBottom variant="h5" component="div">Features</Typography>
             <ListDogDetail dog={dog}/>
            
           </Box>
        </Box>
      </CardActions>
    </Card>
  )
}

export default CardDetail