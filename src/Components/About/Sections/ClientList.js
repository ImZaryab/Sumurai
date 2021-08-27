import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AIR from '../../../Images/AIR.png';
import NBC from '../../../Images/NBC.png';
import OCEAN from '../../../Images/OCEAN.png';
import OMNISBIT from '../../../Images/OMNISBIT.png';
import ALTRON from '../../../Images/ALTRON.png';
import {Image} from 'react-bootstrap'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function ClientList() {
    const [clientReviews, setClientReviews] = useState([
        AIR,
        NBC,
        OMNISBIT,
        OCEAN,
        ALTRON
    ])
    const renderDATA = clientReviews.map((client)=>{
        return(
            <div className='col-12 mr-3 ' style={{position:'relative'}} > 
                <Image src={client} fluid />   
            </div>
             )
         })

    return (
        <div className='col-12 mb-md-5' style={{overflow:'hidden', position:'relative'}}>
            <Carousel responsive={responsive} 
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {renderDATA}
            </Carousel>
       </div>
    )
}

export default ClientList
