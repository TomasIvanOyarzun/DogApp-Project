import React from 'react'
import { getUserData, useFetchCommentIdQuery } from '../../../feactures/user/UserSlice'
import CardProfileComment from './CardProfileComment'


import Carousel from 'better-react-carousel'


const CardsProfile = () => {
    const user : getUserData = JSON.parse(localStorage.getItem('user') as string)
    const {data, isSuccess, error} = useFetchCommentIdQuery(user._id)
  return (
    <>


     
{isSuccess && data.slice(-3).map(el => (
        
             <CardProfileComment  comment= {el}/>
     
        
      ))}
   
    

   
    </>
  )
}

export default CardsProfile