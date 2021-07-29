import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DrawArea from '../../../pages/StyledComponent/DrawArea'
import DrawPic from '../../../pages/StyledComponent/DrawPic'
import { faShopify } from '@fortawesome/free-brands-svg-icons'


function DrawPics({content,color, icon}) {
    
   
    return (
        <DrawArea className="w-100 text-center d-flex justify-content-center draw-area">
            <DrawPic color={color} bg={color} content={content} className='draw-pic text-center'>
                <FontAwesomeIcon icon={icon} />
            </DrawPic>
        </DrawArea>
        
    )
}

export default DrawPics
