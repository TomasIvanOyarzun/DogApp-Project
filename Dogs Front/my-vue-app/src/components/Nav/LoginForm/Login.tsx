import React from 'react'
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';


import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useFetchAuthenticateUserMutation, useFetchDataUserQuery, userActive} from '../../../feactures/user/UserSlice';
import { useAppDispatch } from '../../../hooks/toolkitHooks';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



interface Props {
    openOut : boolean
    setOpenOut : React.Dispatch<React.SetStateAction<boolean>>
}

const initialState = {
  email : '',
  password : ''
}
const Login = ({openOut, setOpenOut} : Props) => {
    
  const dispatch = useAppDispatch()
  const [login, result] = useFetchAuthenticateUserMutation()
    const [input, setInput] = React.useState(initialState)
   
    
    const {data, isSuccess} = useFetchDataUserQuery(result.data?.token)
   
    console.log(data)
    const handleClose = () => {
      setOpenOut(false);

    };

    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
          setInput({
            ...input,
            [e.target.name] : e.target.value
          })

          
    }
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    console.log(input)

    const handleOnsubmit =  (e : React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
           
          login(input)
          setInput(initialState)
    }

   React.useEffect(() => {
  
        if(isSuccess) {
    
          localStorage.setItem('user', JSON.stringify(data))
          setOpenOut(false);
          dispatch(userActive(true))
        }
   },[data])

  console.log(result)
  return (
      
       <>
   
      <Dialog open={openOut} onClose={handleClose} >
        <Box display='flex' justifyContent='center'  >
            <Box display='flex' alignItems='center' >
            <DialogTitle  sx={{fontSize: '32px'}}>Sing Up</DialogTitle> <AccountCircleIcon fontSize='large' /> 
            </Box>

        </Box >
        
        
        <Box sx={{display : 'flex', justifyContent: 'center' }}>
        <DialogContent>
        
          { result.isError ? <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  the credentials are incorrect or do not exist — <strong>check it out!</strong>
</Alert> : 

<DialogContentText>
Log in to create dog breeds and have access to more content on the page.
</DialogContentText>
}
       

          <form onSubmit={handleOnsubmit}>
         <Box sx={{width: '100%', height:'200px', display : 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          
          <FormControl variant="standard">
        <InputLabel >
          Email
        </InputLabel>
        <Input
          name='email'
          value={input.email}
          onChange={handleOnChange}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl  variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
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
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
         <Box>
         <Button type='submit' variant="contained" endIcon={<SendIcon />}>Lo gin</Button>

          
          </Box>
       
         </Box>
         </form>
        </DialogContent>

        </Box>
        <DialogActions>
         
         

         
        </DialogActions>
        
        
      </Dialog>
      
      </>
  )
}

export default Login