import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { DogApi } from '../../../feactures/dog/DogSlice';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';


interface Props {
  dog :  DogApi,
  temp : string
}


const CardLanding = ({dog, temp} : Props) => {


  return (
    <Card sx={{ maxWidth: 345 , height: '95%' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={dog.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {dog.name}
        </Typography>

        <Box display='flex' flexWrap='wrap' justifyContent='space-evenly'>
       
      {dog.temperament.map((el,index) => (
        <Chip key={index} label={el} sx={{marginBottom: '3px', }} style={{backgroundColor : el === temp ? 'orange' : '#ECEBEB'}}  />

      ))}
      
      </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardLanding