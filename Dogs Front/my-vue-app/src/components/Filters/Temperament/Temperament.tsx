import React from 'react'
import { increment, temperamentSelect} from '../../../feactures/dog/DogSlice';
import { useAppDispatch } from '../../../hooks/toolkitHooks';
import {  useFetchTemperamentsQuery } from '../../../feactures/dog/DogSlice'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/system'
import { Divider, Grid, Typography } from '@mui/material'


const Temperament = () => {
    const [temperament, setTemperament] = React.useState('');
    const dispatch = useAppDispatch()
    const handleChange = (event: SelectChangeEvent) => {
      setTemperament(event.target.value as string);
        dispatch(temperamentSelect(event.target.value))
        dispatch(increment(1))
    };
    const {data} = useFetchTemperamentsQuery('')
  return (
    <>
    <Typography gutterBottom variant="h6" component="div">
       Temperaments
       </Typography>
       <Box sx={{ minWidth: 120, marginBottom: '15px' }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Temperament</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={temperament}
          label="temperament"
          onChange={handleChange}
        >
          {data?.map(el => (
            <MenuItem key={el._id} value={el.name}>{el.name}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </Box>
    </>
  )
}

export default Temperament