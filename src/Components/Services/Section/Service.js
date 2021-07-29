import React from 'react'
import HeadingService from '../../../pages/StyledComponent/HeadingService'
import ParaStyled from '../../../pages/StyledComponent/ParaStyled'
import w1 from '../../../Images/w1.png'
import ServiceIMGStyled from '../../../pages/StyledComponent/ServiceIMGStyled'
function Service({data}) {
    return (
        < >
        
            <ServiceIMGStyled marginBottom="17px"  src={w1} />
            <HeadingService marginBottom="16px">{data.heading}</HeadingService>
            <ParaStyled aboutsec='16px' marginBottom="17px">{data.para}</ParaStyled>

        </>
    )
}

export default Service;
