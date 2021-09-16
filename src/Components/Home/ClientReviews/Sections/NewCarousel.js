import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo_N from "../../../../Images/PP.jpg";
import ReviewCardTemplate from "../../../../pages/StyledComponent/ReviewCardTemplate";
import SliderWrapper from "./Slider/SliderWrapper.js";

export default () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  const [clientReviews, setClientReviews] = useState([
    {
        text:'I’ve been using Zaytrics services for about 1 year and on multiple projects. Zaytrics have masters of web3js & several other programming languages In addition they also gives an unbeatable customer service like I’ve never seen. they used web3js to make omnis-bit, developing such a large site with so many blockchain functions is not a trivial matter, it requires attention and great knowledge. What I like best about Them is that they are committed to get it right and is a consummate problem solver. They always figured it out and delivered on their promise and on my vision.',
        img:logo_N,
        name:'Mirko Vanzo',
        designation:'CEO, OMNIS-BIT',
    },
    {
      text:'It was a pleasure to work with Team Zaytrics. Very responsive and willing to work through some challenges to complete the project. ',
      img:logo_N,
      name:'SYED REZA',
      designation:'Managing Partner, uNLOK Development USA',
  },
  {
      text:'They are machine learning experts who took a thoughtful approach to our project. It was a difficult task (interpreting unstructured text) and he came up with a good solution. He was very easy to work with. A nice, patient man. I recommend you consider them for your project.',
      img:logo_N,
      name:'Stephen ',
      designation:'CTO BrandCrafter',
  },
  {
      text:'They are really good team, they developed a very complicated and innovative VOIP solution for us. They are really trustworthy people and I would definitely recommend them.',
      img:logo_N,
      name:'Yasir Kobari',
      designation:'CEO, Het Nationale Bespaar Collectief B.V',
  },
  {
      text:'They developed an innovative and challenging products for the crypto market. I remember they went through many challenges, because we have so many indicators, but they overcome each one with ease. Surely, they are a great team.',
      img:logo_N,
      name:'Eric',
      designation:'CEO, TraderBase',
  },
])
const renderDATA = clientReviews.map((client)=>{
   return(
   <div className='' style={{position:'relative'}} >    
        <ReviewCardTemplate  className='MainDivClient'>
            <div className="testimonials__container">
                <div className='client_text text-white'>
                    <div className="client_starts mb-2 ">
                        <div className='mr-2'><FontAwesomeIcon icon={faStar} style={{color:"#fec731",fontSize: '20px', textShadow:'0 0 3px #000'}}/></div>
                        <div className='mr-2'><FontAwesomeIcon icon={faStar} style={{color:"#fec731",fontSize: '20px'}}/></div>
                        <div className='mr-2'><FontAwesomeIcon icon={faStar} style={{color:"#fec731",fontSize: '20px'}}/></div>
                        <div className='mr-2'><FontAwesomeIcon icon={faStar} style={{color:"#fec731",fontSize: '20px'}}/></div>
                        <div className='mr-2'><FontAwesomeIcon icon={faStar} style={{color:"#fec731",fontSize: '20px'}}/></div>
                    </div>
                    <p style={{lineHeight:'1.5', marginBottom:'0'}}>
                        {client.text}
                    </p>
                </div>
            </div>

        </ReviewCardTemplate>
        <div className='Info mb-5'>
            <div className="d-flex ">
                <div style={{borderRadius:'50%', marginRight:'1.6rem'}}>
                    <img src={client.img} alt="" width="80px" className='img-clas'/>
                </div>
                <div className="d-flex flex-column my-auto ">
                    <h6 className='' style={{ fontWeight : '600', textTransform: 'uppercase',fontSize: '15px', margiBottom: '0px'}}>{client.name}</h6>
                    <p style={{marginBottom:'0'}}><span style={{color:'#0c54ad', fontWeight:'600'}}> {client.designation}</span></p>
                </div>
            </div>
        </div>
    </div>
    )
})


  return (
    <SliderWrapper>
      <Slider {...settings}>
      {renderDATA}
    </Slider>
    </SliderWrapper>
  );
};
