import { DogSlice } from "../dog/DogSlice";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { commentType } from "../../Pages/DogDetail/Comment/Comment";
export interface getUserData {
   
        _id: string
        userName: string
        email: string
        rol: string
        confirmed: boolean
      
}
interface Register {
    name : string,
    email : string,
    password : string
}
type login = Omit<Register, "name">

type errorAndResponse = {
    error: boolean
    msg : string
}

type responseLogin = {
  
        token: string,
        error: boolean,
        msg: string
     
}

export interface commentResponse {
    _id?: string
    dog: string,
    comment: string,
    user: string,
    like : number,
    exits : boolean,
    __v?: number




   
}

export interface allUser {
    _id: string
    name: string,
    email: string,
    password: string,
    image? : string
    email_confirmed: boolean,
    role: string,
    token: string | null,
    comments: Array<string>
    __v: number
}
export interface commentPost {
    user : string,
    comment : string, 
    dog : string
}

export interface updatingComment {
    _id: string | undefined;
    dog: string;
    user : string
    comment: string;
    like: number;
    exits: boolean;
}


const UserQuery = DogSlice.injectEndpoints({
    

    endpoints : (builder) => ({
        fetchRegisterUser : builder.mutation<errorAndResponse , Register > ( {
            query : (data) => ({
             url : '/user',
             method : 'POST',
             body : data

            }),

            
        }

        ),

       
        fetchAuthenticateUser : builder.mutation<responseLogin , login >({

            
            query : (data) => ({
            url : '/authenticate',
            method : 'POST',
            body : data
            }),
           
        }),

        fetchDataUser : builder.query<getUserData , string | undefined >({

            
            query (token) {
               return {
                 url : '/user',
                 headers : {Bearer: token}
               }
            }
        }),

        fetchComments : builder.query<updatingComment[] , string | undefined>({
            query : (id) => `/comment/${id}` ,
            providesTags: ['Comment'],
            
        }),

        fetchAllUser : builder.query<allUser[] , string | undefined>({
            query : () => `/all/users`
        }),

        fetchPostComment : builder.mutation<commentResponse, commentPost >({
            query : (data) => ({
                url : '/comment',
                method : 'POST',
                body : data
                }),
                invalidatesTags : ['Comment']
        }),

        fetchUpdateComment : builder.mutation< updatingComment, updatingComment > ({
            query : (data) => ({
                
                url : `/comment/${data._id}`,
                method : 'PUT',
                body : data
                }),
                invalidatesTags : ['Comment']
        })
        

        
    })
})

const initialState = {
    active : false
}
const UserSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
    
        userActive : (state, action : PayloadAction<boolean>) => {
           state.active = action.payload
        }

       
    }
})
export const {useFetchRegisterUserMutation,
     useFetchAuthenticateUserMutation,
      useFetchDataUserQuery, 
      useFetchCommentsQuery, 
      useFetchAllUserQuery,
       useFetchPostCommentMutation,
    useFetchUpdateCommentMutation} = UserQuery


export default UserSlice.reducer
export const {userActive} = UserSlice.actions