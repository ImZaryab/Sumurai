import React from 'react'
import BGContainer from '../../../pages/StyledComponent/BGContainer'
import OurClient from '../OurClient'
import FirstRow from './FirstRow'
import OurTeam from './OurTeam'

function AboutBody() {
    return (
        <BGContainer bg='white'>
            <div className='container'>
                <FirstRow/>
                <OurClient/>
                <OurTeam/>
            </div>
        </BGContainer>
    )
}

export default AboutBody
