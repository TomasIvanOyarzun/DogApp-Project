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
const Panel = () => {
  return (
    <Box
    sx={{ width: 280 , height: '100%',backgroundColor : '#79C89A' , boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}
    
  >
 


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
      {['Inicio', 'Home', 'Logout'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <HouseSidingIcon fontSize='large'/>}
              {index === 1 && <HomeSharpIcon fontSize='large'/>}
              {index === 2 && <MeetingRoomSharpIcon fontSize='large'/>}
            </ListItemIcon>
            <ListItemText  sx={{color : '#fff'}} primary={text}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Box display='flex' width='100%' justifyContent='center' marginTop='30px'>
    <img width='220px'  src={logo_white} alt='logo-app'/>
    </Box>
  </Box >
  )
}

export default Panel