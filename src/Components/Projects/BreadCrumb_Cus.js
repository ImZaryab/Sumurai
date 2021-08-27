import React from 'react'
import BGContainer from '../../pages/StyledComponent/BGContainer'
import Heading2Styled from '../../pages/StyledComponent/Heading2Styled'

function BreadCrumb_Cus({heading}) {
    return (
        <BGContainer>
            <div className="container">
                <div className='row'>
                    
                    <div className='col-12'>
                        <div className="w-100 d-flex flex-column align-items-center text-white justify-content-center">
                            <Heading2Styled  color='white' fontWeight='500' fontSize='42px' marginBottom='2px'>
                                {heading}   
                            </Heading2Styled> 
                            {/* <ParaStyled color='white' opacity='0.9' > */}
                                {/* <SpanStyled color='#337ab7'> */}
                                    {/* <Link to='/'> Home </Link> */}
                                    {/* </SpanStyled> / {heading} */}
                            {/* </ParaStyled>                          */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </BGContainer>
    )
}

export default BreadCrumb_Cus
