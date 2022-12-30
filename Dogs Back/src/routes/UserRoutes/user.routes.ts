import { Router } from "express";
import {authenticateUser, confirmUser, getAllUser, registerUser, userData} from '../../controllers/user/UserController'
import { getAllComment } from "../../controllers/user/UserCommentController";
import { verifyToken } from "../../middleware/verifyToken";
const router = Router()

router.post('/user', registerUser )
router.put('/confirm/:token', confirmUser)
router.post('/authenticate', authenticateUser)
router.get('/authenticate', authenticateUser)
router.get('/user' , verifyToken , userData)
router.get('/comments', getAllComment)
router.get('/all/users', getAllUser)

export default router 