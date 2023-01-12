import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { createSlice , PayloadAction} from "@reduxjs/toolkit"

export interface DogApi {
    _id? : string,
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
  
  export interface Temperaments {
    _id : string,
    name : string
  }

  
  export const DogSlice = createApi({
    reducerPath : 'dogApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3001'
    }),
    tagTypes : ['Comment', 'User','Favorite', 'postDog'],
    endpoints(builder) {
        return {
            fetchDogs : builder.query<requestBackDog , reducerDog>({
                query(filterOptions) {
                    return `/dogs?page=${filterOptions.page}&temperament=${filterOptions.temperament}`
                },
                providesTags : ['postDog']
            }),
            fetchDogById : builder.query<DogApi, string | undefined>({
                query(id){
                    return `/dog/${id}`
                }
            }),

            fetchTemperaments : builder.query<Temperaments[], string>({
              query(){
                return `/temperaments`
              }
            }),
            fetchDogsTemperament : builder.query<requestBackDog , string | undefined>({
              query(temperament) {
                  return `/dogs?temperament=${temperament}`
              }
          }),
          
          fetchDogsPost : builder.mutation<DogApi, DogApi>({
            query : (data) => ({
              url : `/create/dog`,
              method : 'POST',
              body : data
          }),
          invalidatesTags : ['postDog']
         
          })
        
        }
    }
  })
 
  
   interface reducerDog  {
   
      page : number,
      temperament : string
      height : string
      weight : string
      order : string
   }



  const initialState = {
    fetchDog : {
      page : 1 ,
      temperament : '',
    
      height : '',
      weight : '',
      order : ''
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
        },
         
        filterOptions : ( state, action : PayloadAction<reducerDog>) => {
             state.fetchDog = action.payload 
        }

       
    }
})
  
export const { increment, temperamentSelect, filterOptions} = DogSlice3.actions
export default DogSlice3.reducer
  export const {useFetchDogsQuery, useFetchDogByIdQuery, useFetchTemperamentsQuery, useFetchDogsTemperamentQuery, useFetchDogsPostMutation} = DogSlice