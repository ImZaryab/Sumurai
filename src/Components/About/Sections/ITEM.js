import React from 'react'
import Heading2Styled from '../../../pages/StyledComponent/Heading2Styled'
import ParaStyled from '../../../pages/StyledComponent/ParaStyled'
import DrawArea from '../../../pages/StyledComponent/DrawArea'
import DrawPic from '../../../pages/StyledComponent/DrawPic'
import { faShopify } from '@fortawesome/free-brands-svg-icons'
import DrawPics from './DrawPics'
function ITEM({item}) {
    return (
        <>
        
        
            <div className="col-12 col-md-4 mb-2">
                <div className="d-flex flex-column align-content-center justify-content-center text-center">
                    <DrawPics content={item.content}  color={item.color} icon={item.icon}/>
                    <Heading2Styled lineheight='34px' fontSize='22px' padding='0px 38px'>
                        {item.heading}
                    </Heading2Styled>
                    <ParaStyled MachineL='16px'>
                    {item.text}
                    </ParaStyled>
                </div>
                
            </div>
        </>
    )
}

export default ITEM
