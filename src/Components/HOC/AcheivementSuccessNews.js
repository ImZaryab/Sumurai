import React from 'react'
import Heading2Styled from '../../pages/StyledComponent/Heading2Styled'

function AcheivementSuccessNews({data}) {
    //console.log(data.heading);
    return (
        <div className="row m-0 mb-4 mt-4 mt-md-5">
                    <div className='col-12'>
                        <div className="d-flex justify-content-center text-center flex-column">
                            <Heading2Styled fontSize='40px'>
                                {data.heading}
                            </Heading2Styled>
                            {/* <div className="w-100 mx-auto">
                                <ParaStyled className="w-90 w-md-50  m-auto  mb-0 text-center mx-auto">
                                    {data.text}
                                </ParaStyled>
                            </div> */}
                            
                        </div>
                    </div>
        </div>
    )
}

export default AcheivementSuccessNews
