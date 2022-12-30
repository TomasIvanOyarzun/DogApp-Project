import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFetchUpdateCommentMutation } from '../../../feactures/user/UserSlice';
import { commentType } from './Comment';

interface Props {
    openDialog : boolean
    setOpenDialog :  React.Dispatch<React.SetStateAction<boolean>>
   
    
     user : commentType
 
}
const DialogComment = ({openDialog, setOpenDialog, user} : Props) => {
   
    const [updating] = useFetchUpdateCommentMutation()
    const handleClickOpen = () => {
      setOpenDialog(true);
    };
  
    const handleClose = () => {
      setOpenDialog(false);
    };
  
    const handleOnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log('entre')
        const updatingFix = {
           _id : user._id,
           dog : user.dog,
           user : user.user,
           comment : user.comment,
           like : user.like,
            exits : false
           
           
           
        }
        updating(updatingFix)

        setOpenDialog(false)
    }
        
  return (
    <Dialog
    open={openDialog}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"delete comment"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      Are you sure you want to delete this comment?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleOnClick} variant="contained">Delete</Button>
      <Button onClick={handleClose} autoFocus>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default DialogComment