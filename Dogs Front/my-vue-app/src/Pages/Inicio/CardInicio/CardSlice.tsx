const imageArray = ['https://cdn2.thedogapi.com/images/BFRYBufpm.jpg', 'https://cdn2.thedogapi.com/images/dW5UucTIW.jpg',
'https://cdn2.thedogapi.com/images/rkiByec47.jpg', 'https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg','https://cdn2.thedogapi.com/images/pk1AAdloG.jpg',
'https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg', 'https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg','https://cdn2.thedogapi.com/images/A09F4c1qP.jpg',
'https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg']
import Carousel from 'better-react-carousel'
 

const CardSlice = () => {
  
    


  return (
    <Carousel cols={5} rows={1} gap={15} loop >
    {imageArray.map(el => (
      <Carousel.Item >
      <img width="250px" height="250px"  style={{borderRadius: '50%'}} src={el} />
    </Carousel.Item>
    ))}
   
    
  </Carousel>

  )
}

export default CardSlice