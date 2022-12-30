import { Router } from "express";
import { getCommentByDog, postComment, updateComment } from "../../controllers/user/UserCommentController"; 


const router = Router()
router.post('/comment', postComment)
router.get('/comment/:id', getCommentByDog )
router.put('/comment/:id', updateComment)

export default router 