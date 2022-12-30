import React from 'react'

import dog_one from '../../images/dog-banner-1.jpg'
import dog_two from '../../images/dog-banner-2.jpg'
import dog_three from '../../images/dog-banner-3.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const CarruselN = () => {
  return (
   
    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
                <div>
                    <img src={dog_one} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={dog_two} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={dog_three} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
   
  
 
    
  )
}

export default CarruselN