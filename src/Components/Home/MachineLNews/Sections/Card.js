import React from 'react'
import {Image} from 'react-bootstrap'
import Heading2Styled from '../../../../pages/StyledComponent/Heading2Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faComment } from '@fortawesome/free-regular-svg-icons'
import ParaStyled from '../../../../pages/StyledComponent/ParaStyled'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
function Card({data}) {
    return (
        <>
            <div className="col-12 col-md-4">
                <div className='d-flex flex-column machine_col'>
                    <div>
                        <Image src={data.img} className='w-100' rounded />
                    </div>

                    <div style={{padding:'2.15rem 1.75rem'}}>
                        <div className="d-flex mb-0">
                            <div className="d-flex mr-3" style={{fontSize:'12.5px', color:'#0c54ad'}}>
                                <div>
                                    <FontAwesomeIcon icon={faUserAlt} className='mr-1'/>
                                </div>
                                <div>
                                    <ParaStyled MachineL="12.5px" marginBottom="1rem">Admin</ParaStyled>
                                </div>
                            </div>
                            <div className="d-flex mr-3" style={{fontSize:'12.5px', color:'#0c54ad'}}>
                                <div>
                                    <FontAwesomeIcon icon={faCalendarAlt} className='mr-1'/>
                                </div>
                                <div>
                                    <ParaStyled MachineL="12.5px"  marginBottom="1rem">20 May, 2021</ParaStyled>
                                </div>
                            </div>
                            <div className="d-flex mr-3" style={{fontSize:'12.5px', color:'#0c54ad'}}>
                                <div>
                                    <FontAwesomeIcon icon={faComment} className='mr-1'/>
                                </div>
                                <div>
                                    <ParaStyled MachineL="12.5px" marginBottom="1rem">13</ParaStyled>
                                </div>
                            </div>
                        </div>
                        <div className='pr-2'>
                            <Heading2Styled  fontSize="21px"  style={{lineHeight:'30px', fontWeight:'600', color:'#2a354e', marginBottom:'6px'}}>
                                {data.heading}
                            </Heading2Styled>
                        </div>
                    </div>

                </div>
            </div>
        
        </>
    )
}

export default Card
