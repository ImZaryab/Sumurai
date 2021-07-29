import React from 'react'
import ButtonStyled from '../../pages/StyledComponent/ButtonStyled'
import home_pic from '../../Images/s1.png'
import Heading2Styled from '../../pages/StyledComponent/Heading2Styled'
import SpanStyled from '../../pages/StyledComponent/SpanStyled'
import ParaStyled from '../../pages/StyledComponent/ParaStyled'
import HeaderView from './HeaderView'
import NavbarCustom from './NavbarCustom'
function HomeBody() {
    return (
        <>
        
        <div id="homeBody" className="Home_body container p-0">
            <div className='px-3'>
                <HeaderView/>
                <NavbarCustom/>
            </div>
            <div className="row w-100 p-0 mx-auto">
                <div className="col-10 mx-auto col-md-6 p-0">
                    <div className="pt-2 pt-md-4 pb-2 pb-md-4 ">
                        <div className="d-flex flex-column pt-md-5">
                            <div>
                                
                                <Heading2Styled className=''>
                                    Build an application powered by <SpanStyled > Machine Learning and Blockchain. </SpanStyled> 
                                </Heading2Styled>
                            </div>
                            <div className="pr-4">
                                <ParaStyled className=''>
                                We develop the future by producing state-of-the-art products with skills, art, knowledge, and discipline.
                                </ParaStyled>
                            </div>
                            <div className="pt-3">
                                
                                <ButtonStyled className="btn text-white ">
                                    Get In Touch
                                </ButtonStyled>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-md-6 p-0">
                    <div className="p-2 pl-4">
                        <img src={home_pic} alt="HOme PIC" width="100%" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeBody
