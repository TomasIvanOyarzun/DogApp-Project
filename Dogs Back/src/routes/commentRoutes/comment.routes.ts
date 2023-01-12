import { Router } from "express";
import { getCommentByDog, postComment, updateComment } from "../../controllers/user/UserCommentController"; 


const router = Router()
router.post('/comment', postComment)

//router.get('/comment/user/:id', getCommentByDog2 )
router.put('/comment/:id', updateComment)
router.get('/comments/:id', getCommentByDog)

export default router 