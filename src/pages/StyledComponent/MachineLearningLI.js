import React from 'react'
import ParaAfterStyled from './ParaAfterStyled'

function MachineLearningLI({text}) {
    return (
        <div className="para_Div">
            <ParaAfterStyled className="para">
                {text}
            </ParaAfterStyled>                 
       </div>
    )
}

export default MachineLearningLI
