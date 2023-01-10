import { UserModel } from "../../models/User";
import { Request, Response, NextFunction } from "express";
import { commentPost } from "../../types";

import { CommentModel } from "../../models/Comment";


export const getAllComment = async (req: Request, res: Response , next : NextFunction) => {
    try {

      const users = await UserModel.find({ comments: {$exists: true, $not: {$size: 0}} })

       res.status(200).json(users)
      
    } catch (error) {
      next(error)
    }
  }

  export const getCommentByDog = async (req: Request, res: Response , next : NextFunction) => {
    const {id} = req.params
    try {
           const dog = await CommentModel.find({dog : id, exits: true}).sort({_id: -1})

           if(dog.length > 0) {
              res.status(200).json(dog)
              return
           } 

           res.status(400).json({msg : 'no exist comments'})
    } catch (error) {
      next(error)
    }
  }
  export const postComment = async (req: Request, res: Response , next : NextFunction) => {

     const {dog, comment, user} : commentPost = req.body
    
    try {
        const newComment = new CommentModel({dog, comment, user})
        await newComment.save()

        res.status(200).json(newComment)
    } catch (error) {

      next(error)
      
    }
  }

  export const updateComment = async (req: Request, res: Response , next : NextFunction) => {
    const {id} = req.params
    
    try {
        const update = await CommentModel.findByIdAndUpdate(id,
            { $set: req.body },
            { new: true })
        
            return res.status(200).json(update)
    } catch (error) {
        next(error)
    }
  }


  export const getCommentId = async (req: Request, res: Response , next : NextFunction) => {

    const {id} = req.params
   
  try {
  
   
   
     const user = await CommentModel.find({user : id , exits : true})
      
  
     res.status(200).json(user)
  } catch (error) {
  
   next(error)
   
  }
  }