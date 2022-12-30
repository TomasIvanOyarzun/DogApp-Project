import {prop, getModelForClass,Ref} from '@typegoose/typegoose'
import { v4} from 'uuid'
import { Dog } from './Dog'

class Comment {
    @prop()
    texto : string

    @prop({ ref : () => Dog})
    dog : Ref<Dog>

}
export class User {
    @prop({type : String, required : true})
    name : string

    @prop({type : String, unique : true , required : true})
    email : string  
    
    @prop({type : String, required : true})
    password : string

    @prop({type : String || null, default : () => v4() })
    token : string | null

    @prop({type: String, default: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png'}) 
    image : string

    @prop({type : () => Comment}) 

    comments : Comment[]

    @prop({type : Boolean, default : false})

    email_confirmed : boolean

    @prop({type: String, default : 'user'})

    role : String
   
    @prop({ ref : () => Dog})
    favorite : Ref<Dog>
    
}


export const UserModel = getModelForClass(User)