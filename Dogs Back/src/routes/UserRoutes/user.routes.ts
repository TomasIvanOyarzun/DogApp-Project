import { Router } from "express";
import {authenticateUser, confirmUser, getAllUser, getFavoriteUser, getUpdateUser, registerUser, userData} from '../../controllers/user/UserController'
import { getAllComment, getCommentId } from "../../controllers/user/UserCommentController";
import { verifyToken } from "../../middleware/verifyToken";
const router = Router()

router.post('/user', registerUser )
router.put('/confirm/:token', confirmUser)
router.post('/authenticate', authenticateUser)
router.get('/authenticate', authenticateUser)
router.get('/user' , verifyToken , userData)
router.get('/comments', getAllComment)
router.get('/all/users', getAllUser)
router.put('/user', getUpdateUser)
router.get('/favorite/:id' , getFavoriteUser)
router.get('/comment/:id' , getCommentId)
export default router 