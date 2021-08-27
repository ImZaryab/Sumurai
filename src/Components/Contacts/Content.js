import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Contact_Div from '../../pages/StyledComponent/Contact_Div'
import ParaStyled from '../../pages/StyledComponent/ParaStyled'

function Content({item}) {

    return (
        
                    <div className='col-12 col-md-4'>
                        <Contact_Div padding='30px 30px 30px' bg='white' >
                            <div className='d-flex flex-column align-items-center' >
                                <FontAwesomeIcon icon={item.img} className='contact-icons' />
                                <ParaStyled marginBottom='4px' MachineL='16px'>
                                    {item.text1}
                                </ParaStyled>
                                <ParaStyled marginBottom='13px' MachineL='16px'>
                                    {item.text2}
                                </ParaStyled>
                            </div>
                        </Contact_Div>
                    </div>

                
    )
}

export default Content
