import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import MeetingRoomSharpIcon from '@mui/icons-material/MeetingRoomSharp';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import logo_white from '../../../images/logo-white.png'
import Avatar from '@mui/material/Avatar';
import { getUserData } from '../../../feactures/user/UserSlice';
import  Typography  from '@mui/material/Typography';
const Panel = () => {
  const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
  return (
    <Box
    sx={{ width: 280 , height: '100%',backgroundColor: '#464D5C' , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}
    
  >
 
         <Box width='100%' display='flex'  flexDirection='column' justifyContent='center' alignItems='center' margin='5px'>
         <Avatar
             alt="Remy Sharp"
             src={user?.image}
             sx={{ width: 80, height: 80, }} />
             <Typography fontWeight='bold' color='#fff'>Hi {user?.userName}</Typography>
         </Box>
       <Divider sx={{background: '#F9FAF9'}}></Divider>
    <List>
      {['Profile', 'Favorites', 'Send email'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <AccountCircleIcon  fontSize='large'/> }
              {index === 1 && <FavoriteBorderIcon fontSize='large'/>}
              {index === 2 && <MailIcon fontSize='large'/>}
            </ListItemIcon>
            <ListItemText sx={{color : '#fff'}} primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['Inicio', 'Home'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <HouseSidingIcon fontSize='large'/>}
              {index === 1 && <HomeSharpIcon fontSize='large'/>}
             
            </ListItemIcon>
            <ListItemText  sx={{color : '#fff'}} primary={text}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Box display='flex' width='100%' justifyContent='center' marginTop='30px'>
    <img width='220px'  src={logo_white} alt='logo-app'/>
    </Box>
    <List sx={{marginTop: '80px'}}>
      
        <ListItem key='Logout' disablePadding>
          <ListItemButton>
            <ListItemIcon>
           <MeetingRoomSharpIcon fontSize='large'/>
            </ListItemIcon>
            <ListItemText sx={{color : '#fff'}} primary='Logout' />
          </ListItemButton>
        </ListItem>
   
    </List>
  </Box >
  )
}

export default Panel