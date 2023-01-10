import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { errorInput, form } from './controlForm';
import Typography from '@mui/material/Typography';

let initialState = {
    name : '' ,
    password : '', 
    confirmPassword : '',
    email : ''
}

 type changeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  interface Props {
    error : form
    setError : React.Dispatch<React.SetStateAction<form>>
    input : form
    setInput : React.Dispatch<React.SetStateAction<form>>
  }
const FormRegister = ({error, setError, input, setInput}: Props) => {

    const [showPassword, setShowPassword] = React.useState(false);
    
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
   
  
    const handleOnChange = (e : changeEvent ) => {
       setInput({
        ...input,
        [e.target.name] : e.target.value
       })

       setError(errorInput({
        ...input, [e.target.name]: e.target.value
      }))
    }
 
    console.log(input)
 
  return (
    <div>


          
    <Box sx={{display: 'flex' , justifyContent: 'center', flexWrap: 'wrap'}}>
<FormControl sx={{m: 1, width : '70%'}}>   
    <TextField
      error={error.name.length > 0}
      id="filled-error"
      label="Name"
      defaultValue="Your name"
       name='name'
       value={input.name}
       onChange={handleOnChange}
    />
     {error.name.length > 0 && <Typography color='red'>{error.name}</Typography>}
     </FormControl>

     <FormControl  sx={{ m: 1, width : '70%' }}>
     <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
             error={error.password.length > 0}
            id="outlined-adornment-password"
            name='password'
            value={input.password}
            onChange={handleOnChange}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {error.password.length > 0 && <Typography color='red'>{error.password}</Typography>}
      </FormControl>
      <FormControl  sx={{ m: 1, width : '70%'}}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
             error={error.confirmPassword.length > 0}
              name='confirmPassword'
              value={input.confirmPassword}
              onChange={handleOnChange}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {error.confirmPassword.length > 0 && <Typography color='red'>{error.confirmPassword}</Typography>}
     </FormControl>
<FormControl  sx={{ width : '70%', m: 1}}>   
    <TextField
    error={error.email.length > 0}
       name='email'
       value={input.email}
       onChange={handleOnChange}
      id="filled-error"
      label="Email"
      defaultValue="ExampleEmail@gmail.com"
      
    />
     {error.email.length > 0 && <Typography color='red'>{error.email}</Typography>}
     </FormControl>
     </Box>   
  </div>
  )
}

export default FormRegister