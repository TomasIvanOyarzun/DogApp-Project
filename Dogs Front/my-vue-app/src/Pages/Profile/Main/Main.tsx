import React from 'react'
import { Box } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { getUserData, useFetchCommentIdQuery } from '../../../feactures/user/UserSlice';
import ChangeImage from '../ChangeImage';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { useWidthScreen } from '../../../hooks/customHooks';
import Typography from '@mui/material/Typography';

const Main = () => {
    const {width} = useWidthScreen()
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const info = [{name : 'Name' , value : user.userName}, {name : 'Role', value : user.role}, {name : 'Email', value : user.email}, {name : 'Email verification', value : user.email_confirmed} ]

    const {data} = useFetchCommentIdQuery(user._id)
    console.log(data)
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', width : '100%' , height :'100vh' , borderRadius: '8px'}}>
    <Box sx={{ display: 'flex', alignItems: 'center', width : width > 599 ? '80%' : '95%' , height :'62%' , background : '#fff', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
      
        
      
        
    
    <Stack direction="column"   >
       
      <Box sx={{ display: 'flex', alignItems: 'center', width : '100%', flexDirection: 'column', justifyContent: 'space-evenly'}}>
        {width > 900 && <Typography variant='h3' fontWeight='bold'>HI {user.userName.toUpperCase()} !</Typography>}
      <Avatar
        alt="Remy Sharp"
        src={user?.image}
        sx={{ width: 200, height: 200, marginBottom : '20px' }}
      />
      <ChangeImage/>
      </Box>
      


    </Stack>
    </Grid>

    <Grid item  xs={12} md={6} lg={6}>
          
        
    <Stack direction="column"  sx={{width : width > 900 ? '90%' : '100%'}}>
       
      
      {info.map((el,index) => (
         <Box display='flex'>
             <Box display='flex' alignItems='center' width='40%'height='60px' borderRadius='4px 0 0 4px' bgcolor={index % 2 === 0 ? '#EAEAEA' : '#FFF'}><Chip sx={{marginLeft : '12px'}} label={el.name} /></Box>
             <Box display='flex' justifyContent='center' alignItems='center' width='60%'height='60px' borderRadius='0 4px 4px 0' bgcolor={index % 2 === 0 ? '#EAEAEA' : '#FFF'}>
                {el.name === 'Email verification' ?  <Alert variant="filled" severity="success">
         confirmed
      </Alert> : <Chip sx={{marginLeft : '12px'}} label={el.value} />
             }
                
             
             </Box>

         </Box>
      ))}

      
    </Stack>
    </Grid>
    </Grid>
   
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', width : width > 599 ? '80%' : '95%' , height :'30%' , background : '#fff', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
              a
        </Box>
        </Box>
    </>
  )
}

export default Main