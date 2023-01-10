import React from 'react'
import { Box } from '@mui/system'
import Checkbox from '@mui/material/Checkbox';
import PetsIcon from '@mui/icons-material/Pets';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckBox = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
    <FormGroup>
    <FormControlLabel  control={  <Checkbox  icon={<PetsIcon />} checkedIcon={<PetsIcon />} />} label="Ascending order" />
    <FormControlLabel control={<Checkbox  icon={<PetsIcon />} checkedIcon={<PetsIcon />} />} label="Descending order" />
  </FormGroup>
    
   
     
  </Box>
  )
}

export default CheckBox