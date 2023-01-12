import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { getUserData, useFetchCommentIdQuery, useFetchFavoriteUserQuery } from '../../../feactures/user/UserSlice';
import ChangeImage from '../ChangeImage';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { useWidthScreen } from '../../../hooks/customHooks';
import Typography from '@mui/material/Typography';
import CardsProfile from './CardsProfile';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import ModeCommentSharpIcon from '@mui/icons-material/ModeCommentSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Main = () => {
  
    const {width} = useWidthScreen()
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const info = [{name : 'Name' , value : user.userName}, {name : 'Role', value : user.role}, {name : 'Email', value : user.email}, {name : 'Email verification', value : user.email_confirmed} ]
    const favorite = useFetchFavoriteUserQuery(user?._id)
 
    const {data} = useFetchCommentIdQuery(user._id)
     console.log(data)

    const [dateState, setDateState] = React.useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 300);

          
    }, []);

     

   
  
  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', width : '100%' , height :'100%' }} >
      <Grid container spacing={4} >



        <Grid item xs={12} md={6} lg={6}  sx={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: width > 900 ? '100%' : '300px', width : '80%', flexDirection: 'column', justifyContent: 'space-between', bgcolor: '#fff', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
             <Box sx={{ width: '100%' , height: '45%' , backgroundColor: '#85FFBD', backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)', filter: 'blur(5px)'}}></Box>
          
             <Avatar
             alt="Remy Sharp"
             src={user?.image}
             sx={{ width: 200, height: 200, marginBottom : '20px' ,  position:'absolute'}} />
            <ChangeImage/>
             </Box>
        </Grid>

      
        <Grid item xs={12} md={6} lg={6}  sx={{display: 'flex', justifyContent: 'center'}}>
              <Box width='80%' bgcolor='#fff' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                <Typography variant='h3' fontWeight='1000'>Your Data</Typography>
          {info.map((el,index) => (
         <Box display='flex' width='80%' justifyContent='center'>
             <Box display='flex' alignItems='center' width='40%'height='60px' borderRadius='4px 0 0 4px' bgcolor={index % 2 === 0 ? '#EAEAEA' : '#FFF'}><Chip sx={{marginLeft : '12px'}} label={el.name} /></Box>
             <Box display='flex' justifyContent='center' alignItems='center' width='60%'height='60px' borderRadius='0 4px 4px 0' bgcolor={index % 2 === 0 ? '#EAEAEA' : '#FFF'}>
                {el.name === 'Email verification' ?  <Alert variant="filled" severity="success">
         confirmed
      </Alert> : <Chip sx={{marginLeft : '12px'}} label={el.value} />
             }
              </Box>
              </Box>

              
              ))}

                </Box>
        </Grid>


        <Grid item xs={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center' , alignItems: 'center'}}> 
            <Box display='flex' justifyContent='space-evenly' bgcolor='#fff' height='100%' width='90%'  sx={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
              a
            </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center'}}>
             <Box display='flex' flexDirection='column' justifyContent='center' width='80%' bgcolor='#F3F4F5' sx={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', marginBottom: width < 1200 ? '20px' : '0px'}}>
                  {width > 1250 && <Box width='100%' display='flex' height='25%' justifyContent='space-evenly'>
                  <Box display='flex' alignItems='center' width='45%' height='100%' justifyContent='space-between'  sx={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius: '4px', backgroundColor: '#FFF'}}>
                  <Typography fontWeight='1000' sx={{marginLeft: '15px'}}>Your comments ({data?.length})</Typography>
                    <ModeCommentSharpIcon sx={{marginRight: '15px' ,fontSize : '40px' }}/> 
                    </Box>
                    <Box display='flex' alignItems='center' width='45%' height='100%' justifyContent='space-between'   sx={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius: '4px',backgroundColor: '#85FFBD', backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'}}>
                     <Typography fontWeight='1000' sx={{marginLeft: '15px'}}>Your favorites ({favorite.data?.length})</Typography>
                     <FavoriteBorderIcon sx={{marginRight: '15px' ,fontSize : '40px' }}/>
                    </Box>
                  </Box>}
                  
                  <Box display='flex' justifyContent='center' width='100%'>
                  <Typography variant={width < 600 ? 'h5' : 'h2'} fontWeight='1000'>{dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second : 'numeric',
                hour12: true,
            })}</Typography>
              <WatchLaterSharpIcon sx={{fontSize: width > 600 ? '60px' : '30px'}}/>
                  </Box>

              <Box display='flex' justifyContent='center' width='100%'>
              <Typography variant={width < 600 ? 'h5' : 'h3'}  fontWeight='800'>{dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}</Typography>
               <CalendarMonthSharpIcon sx={{fontSize: '40px'}}/>
              </Box>
             </Box>
         </Grid>


      </Grid>
      </Box>
    </>
  )
}

export default Main