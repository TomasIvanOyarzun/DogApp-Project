import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
  
const SizeDog = () => {
   const [number , setNumber] = useState(0)
    const handleOnChange = (e : Event , value : number) => {
         setNumber(value)
    }

    console.log(number)
  return (
    <Box >
    <Slider
      aria-label="Custom marks"
      defaultValue={0}
      getAriaValueText={valuetext}
      step={1}
      valueLabelDisplay="auto"
      marks={marks}
      onChange={ handleOnChange}
      
    />
  </Box>
  )
}

export default SizeDog