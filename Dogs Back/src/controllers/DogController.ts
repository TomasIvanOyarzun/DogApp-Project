import { DogModel} from "../models/Dog";
import { TemperamentModel } from "../models/Temperament";
import { Request, Response, NextFunction } from "express";
import { IDog } from "../types";



export const getAllDogs = async (req : Request, res: Response, next: NextFunction) => {
    const {temperament} = req.query
    
    const options = {
        limit: 9,
        page: parseInt(req.query.page as string) 
      };
    
    
    try {
           
        
          const dogs = await DogModel.paginate( { temperament :  { "$regex": `${temperament}`, "$options": "i" }}, options)
           res.status(200).json(dogs)
    } catch (error) {
        next(error)
    }
}


export const postDog = async (req : Request, res: Response, next: NextFunction) => {
       
       const {name,weight,height,life_span,image, temperament} : IDog = req.body
      
     try {
        
        const newDog = new DogModel({name,weight,height,life_span,image, temperament})

       await newDog.save()
        
        res.status(200).json(newDog)

        

     } catch (error) {
        next(error)

     }


 
}

export const updateDog = async (req : Request, res: Response, next: NextFunction) => {
    const {id } = req.params
     const body : IDog = req.body
    try {
        
        const  dog = await DogModel.findByIdAndUpdate(id, { $set : body}, { new : true})

        if (!dog) {
            res.status(400).json({error : true , msg : 'the dog was not found'})
        }

        res.status(200).json(dog)

    } catch (error) {
        next(error)
    }
}

export const getDogById = async (req : Request, res: Response, next: NextFunction) => {
       const {id } = req.params
    try {
       
        
        const matchDog = await DogModel.findById(id)
       
         if (!matchDog) {
            res.status(400).json({error : true , msg : 'the dog was not found'})
         } else {
            res.status(200).json(matchDog)
         }
       
    } catch (error) {
        next(error)
    }
}


export const getTemperament = async (req : Request, res: Response, next: NextFunction) => {
    
 try {
     

    // const {data} = await axios<dogApi[]>('https://api.thedogapi.com/v1/breeds')
    //  const temperaments = data.map(e=> e.temperament).join(',').replace('  ', '').split(',').filter(j => j !== '')
    //   const noSpace = [...temperaments].map(el  => el.trim())
    // const temperamentNoRepeats = new Set(noSpace)
       
  
  
    const temperaments = await TemperamentModel.find().sort({ name : 1})

    if(!temperaments) res.status(400).json({error : true, msg : 'there are no temperaments'})
         res.status(200).json(temperaments)
      
    
 } catch (error) {
     next(error)
 }
}