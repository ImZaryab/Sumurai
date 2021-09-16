import React from 'react'
import BGContainer from '../../../pages/StyledComponent/BGContainer'
import Heading2Styled from '../../../pages/StyledComponent/Heading2Styled'
import SpanStyled from '../../../pages/StyledComponent/SpanStyled'
import ParaStyled from '../../../pages/StyledComponent/ParaStyled'
import ButtonStyled from '../../../pages/StyledComponent/ButtonStyled'
import './Sections/ClientReviews.css'
import CardSlider from './Sections/CardSlider'
import Slider from './Sections/NewCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from './Sections/Owldemo1'
import SliderWrapper from './Sections/Slider/SliderWrapper'
import { CarouselItem } from 'react-bootstrap'

function ClientReviews() {
    
    return (
        <BGContainer >
            <div className="container client_area">
                
                    <div className="row carousel-container">
                        <div className="col-12 col-md-4 pr-5 reviews_tagline">
                            <div className="reviews_content_container">
                            <Heading2Styled lineheight="38px" fontSize="34px" className="pr-2" style={{letterSpacing:'1.0px'}}>
                                Our customer say <SpanStyled> about our company </SpanStyled> work.
                            </Heading2Styled>
                            <ParaStyled MachineL="17px">
                            They are really good team, they developed a very complicated and innovative VOIP solution for us. They are really trustworthy people and I would definitely recommend them.
                            </ParaStyled>
                            </div>
                            <div className="reviews_btn_container">
                            <ButtonStyled fontSize="17px" fontWeight="600" style={{marginTop:'.6rem'}}>
                                More Reviews
                            </ButtonStyled>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 pl-2 reviews_container" style={{overflow:'hidden', position:'relative'}}>
                            <Slider/>
                        </div>
                    </div>
                    
            </div>
        </BGContainer>
        
    )
}

export default ClientReviews
