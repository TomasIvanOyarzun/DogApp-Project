import React from 'react'
import { allUser, commentResponse,  getUserData, updatingComment, useFetchAllUserQuery, useFetchCommentsQuery, useFetchUpdateCommentMutation } from '../../../feactures/user/UserSlice'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CommentLogin from './CommentLogin';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Checkbox from '@mui/material/Checkbox';
import PetsIcon from '@mui/icons-material/Pets';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MenuComment from './MenuComment'
import { useParams } from 'react-router-dom';


export type commentType = {
  _id? : string,
  dog : string,
  name : string | undefined,
  image? : string | null
  comment : string,
  like: number,
  user : string
  exist : boolean,

}

const matchComment = (comment : Array<updatingComment> | undefined , user : allUser[] | undefined ) => {
   if(comment !== undefined && user !== undefined && Array.isArray(comment)) {
    return comment.map(el => {
     
      const findUser = user.find(u => u._id === el.user)
     
      return {
        _id : el._id,
        dog: el.dog,
        name : findUser?.name,
        image : findUser?.image || null,
        comment : el.comment,
        like : el.like as number,
        user : el.user,
        exist : el.exits
      }
   })
   }
}


const Comment  = () => {
  const {id} = useParams()
    const {data, isError, isSuccess} = useFetchCommentsQuery(id)
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const allUser = useFetchAllUserQuery('')
    const [comment , setComment] = React.useState<commentType[]>()
    const [load, setLoad] = React.useState(false)

   
   console.log(data)
 
    React.useEffect(  () => {
         setComment(matchComment(data, allUser.data)) 
         setTimeout(() => {
          setLoad(true)

         }, 500)
        
    },[load,data])
   console.log(data)
  return (
   
     <>  

     <Box sx={{width: '100%', paddingBottom: '40px'}}>
      <Typography variant="subtitle1" gutterBottom color='#1976d2'>{isError ?   0 : data?.length} comentarios</Typography>
       {localStorage.getItem('user') && <CommentLogin/>}
       {load  && isError === false && comment?.map((el,index) => (
          <Stack key={index} direction="row" spacing={2} marginBottom='8px'>
          <Avatar  />
          <Box width='100%' display='flex' flexDirection='column'>
               <Typography sx={{fontWeight: 'bold'}}>{el.name}</Typography>
               <Box sx={{ width:'100%', display: 'flex', justifyContent: 'space-between'}}>
               <Typography variant="body1" gutterBottom>{el.comment}</Typography>
               { user?._id === el.user && <MenuComment   user={el}/> }
               </Box>
              
             
            <FormGroup>
              
    <FormControlLabel  control={  <Checkbox  icon={<ThumbUpAltIcon/>} checkedIcon={<ThumbUpAltIcon />} />} label={el.like} />
    
  </FormGroup>
          </Box>
 
        </Stack>
       ))} 
       </Box>
     </>
  )
  
}

export default Comment