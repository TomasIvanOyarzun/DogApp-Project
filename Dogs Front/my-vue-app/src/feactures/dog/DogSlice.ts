import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { createSlice , PayloadAction} from "@reduxjs/toolkit"

export interface DogApi {
    _id : string,
    name : string
    weight : string
    height : string
    life_span : string
    image : string
    temperament : string[]
  }

  export interface requestBackDog {
    docs : DogApi[],
    hasNextPage : boolean,
    hasPrevPage : boolean
    limit : number,
    nextPage : number,
    page : number,
    pagingCounter: number,
    prevPage : number | null
    totalDocs : number,
    totalPages : number,

  }
  
  interface Temperaments {
    _id : number,
    name : string
  }

  
  export const DogSlice = createApi({
    reducerPath : 'dogApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3001'
    }),
    tagTypes : ['Comment'],
    endpoints(builder) {
        return {
            fetchDogs : builder.query<requestBackDog , reducerDog>({
                query(page) {
                    return `/dogs?page=${page.fetchDog.page}&temperament=${page.fetchDog.temperament}`
                }
            }),
            fetchDogById : builder.query<DogApi, string | undefined>({
                query(id){
                    return `/dog/${id}`
                }
            }),

            fetchTemperaments : builder.query<Temperaments[], string | undefined>({
              query(){
                return `/temperaments`
              }
            }),
            fetchDogsTemperament : builder.query<requestBackDog , string | undefined>({
              query(temperament) {
                  return `/dogs?temperament=${temperament}`
              }
          }),

        
        }
    }
  })
 
  
   interface reducerDog  {
     fetchDog : {
      page : number,
      temperament : string
     }
   }
  const initialState = {
    fetchDog : {
      page : 1 ,
      temperament : ''
    }
  }
  const DogSlice3 = createSlice({
    name : 'dogPage',
    initialState,
    reducers : {
        increment : (state,  action : PayloadAction<number>) =>{
             state.fetchDog.page =  action.payload
        },

        temperamentSelect : (state, action : PayloadAction<string>) => {
           state.fetchDog.temperament = action.payload
        }

       
    }
})
  
export const { increment, temperamentSelect} = DogSlice3.actions
export default DogSlice3.reducer
  export const {useFetchDogsQuery, useFetchDogByIdQuery, useFetchTemperamentsQuery, useFetchDogsTemperamentQuery} = DogSlice