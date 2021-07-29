import { text } from '@fortawesome/fontawesome-svg-core'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import home_pic from '../../../Images/ab.png'
import ButtonStyled from '../../../pages/StyledComponent/ButtonStyled'
import Heading2Styled from '../../../pages/StyledComponent/Heading2Styled'
import MachineLearningLI from '../../../pages/StyledComponent/MachineLearningLI'
import ParaAfterStyled from '../../../pages/StyledComponent/ParaAfterStyled'
import ParaStyled from '../../../pages/StyledComponent/ParaStyled'
import SpanStyled from '../../../pages/StyledComponent/SpanStyled'
function IMGSection({data, isBtn}) {
    // 
    const [textLI, setTextLI] = useState(['Smart AI based solutions','Blockchain based solutions','VOIP solutions','Mobile and web solutions']);
    const [checkItem, setCheckItem] = useState('aboutSec')
    const rendeItem = textLI.map((text) => {
        return(                         
            <MachineLearningLI text={text} />
        );
    })
    return (
        <>  
        
            <div className="col-10 mx-auto col-md-6 p-0 py-4">
                <div className="py-2 pr-3">
                    <img src={data.img} alt="HOme PIC" width="100%" />
                </div>
            </div>
            <div className="col-10 mx-auto col-md-6 p-0 py-4">
                <div className="py-2 pl-3">
                    <div className="d-flex flex-column">
                        <div> 
                            <Heading2Styled  fontSize="34px" >{data.heading}</Heading2Styled>
                        </div>
                        <div>
                            <ParaStyled aboutsec>
                            {data.text}
                            </ParaStyled>
                        </div>

                        {rendeItem}
                        
                        
                    
                    </div>
                    {isBtn && <div>
                        <Link to="/about">
                            <ButtonStyled border="1px solid #1AA15F" color="#1AA15F" bg="#1AA15F" learn >View more</ButtonStyled>
                        </Link>
                    </div>}
                </div>
            </div>

        </>

    )
}

export default IMGSection
