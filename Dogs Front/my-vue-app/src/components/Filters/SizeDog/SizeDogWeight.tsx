import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useAppDispatch, useAppSelector } from '../../../hooks/toolkitHooks';
import { filterOptions } from '../../../feactures/dog/DogSlice';

const marks = [
  {
    value: 12,
    label: '12 cm',
  },
 
  {
    value: 50,
    label: '50 cm',
  },
];


function valuetext(value: number) {
    return `${value}cm`;
  }

const SizeDogWeight = () => {
    const [number , setNumber] = React.useState(0)
    const disptach = useAppDispatch()
    const options = useAppSelector(state => state.dogReducer.fetchDog)
    const handleOnChange = (e : Event , value : number) => {
         setNumber(value)
         disptach(filterOptions({
          ...options,
           weight : value.toString()
         }))
    }

    console.log(number)
  return (
    <Box >
    <Slider
      aria-label="Custom marks"
      defaultValue={0}
      getAriaValueText={valuetext}
      step={1}
      sx={{color : 'green'}}
      valueLabelDisplay="auto"
      marks={marks}
      onChange={ handleOnChange}
      
    />
  </Box>
  )
}

export default SizeDogWeight