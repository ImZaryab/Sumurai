import React,{useState} from 'react'
import BGContainer from '../../../pages/StyledComponent/BGContainer'
import Heading2Styled from '../../../pages/StyledComponent/Heading2Styled'
import SpanStyled from '../../../pages/StyledComponent/SpanStyled'
import ParaStyled from '../../../pages/StyledComponent/ParaStyled'
import ButtonStyled from '../../../pages/StyledComponent/ButtonStyled'
import Owldemo1 from './Sections/Owldemo1'
import './Sections/ClientReviews.css'
import CardSlider from './Sections/CardSlider'

function ClientReviews() {
    
    return (
        <BGContainer >
            <div className="container client_area">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-12 col-md-5 pr-5">
                            <Heading2Styled lineheight="38px" fontSize="34px" className="pr-2" style={{letterSpacing:'1.0px'}}>
                                Our customer say <SpanStyled> about our company </SpanStyled> work.
                            </Heading2Styled>
                            <ParaStyled MachineL="17px">
                            They are really good team, they developed a very complicated and innovative VOIP solution for us. They are really trustworthy people and I would definitely recommend them.
                            </ParaStyled>
                            <ButtonStyled fontSize="17px" fontWeight="600" style={{marginTop:'.6rem'}}>
                                More Reviews
                            </ButtonStyled>
                        </div>
                        <CardSlider/>
                    </div>
                    
                        
                    
                </div>
            </div>
        </BGContainer>
        
    )
}

export default ClientReviews
