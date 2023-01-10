import React from 'react'
import Carousel from 'better-react-carousel'
import { useFetchDogsTemperamentQuery } from '../../../feactures/dog/DogSlice'
import CardLanding from './CardLanding'

import Typography from '@mui/material/Typography';
interface Props {
    temperaments : Array<string>
}

const randomTemperament = ( temperamentsArray : Array<string>) => {
   
    
        const rand = Math.random()*temperamentsArray.length | 0;
         const rValue = temperamentsArray[rand | 0];
        
        
       return rValue 
    

    
}
const SliderCardDetail = ({ temperaments} : Props) => {
    
   
    const [temp, setTemp] = React.useState('')
    const {data} =  useFetchDogsTemperamentQuery(temp)

    React.useEffect(() => {
       setTemp(randomTemperament(temperaments))
    },[])
    
  return (
      <>
        <Typography color='#666' variant="h3">Breeds with similar temperaments <strong>{temp}</strong></Typography>
        <Carousel cols={4} rows={1} gap={10} loop >
    
    {data?.docs.map(dog => (
        <Carousel.Item>
        <CardLanding dog = {dog} temp={temp} />
      </Carousel.Item>
    ))}
    
    
  </Carousel>
      </>  
   
  )
}

export default SliderCardDetail