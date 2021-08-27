import React from 'react'
import BGContainer from '../../../pages/StyledComponent/BGContainer'
import logo from '../../../Images/WebsiteLogoResized.png'
import './Section/Footer.css'
import {Image} from 'react-bootstrap'
import ParaStyled from '../../../pages/StyledComponent/ParaStyled'
import FooterHeading from '../../../pages/StyledComponent/FooterHeading'
import FooterSpam from '../../../pages/StyledComponent/FooterSpam'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <BGContainer>
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-md-5'>
                            <div className='d-flex flex-column'>
                                <div>
                                    <Image src={logo} width='40%' style={{marginTop:'-2.7rem'}} />
                                </div>
                                <div>
                                    <ParaStyled MachineL="16.2px" lineHeight='29px'>
                                        Are you looking for professional advice for your new business. Are you looking for professional advice for your new business. Are you looking for professional advice for your new business.
                                    </ParaStyled>
                                </div>
                                <div className="" style={{boxShadow: '0 5px 25px rgb(0 0 0 / 10%)', width: '95%'}} >
                                    <input className="suscribe-input" type="text"  placeholder="Enter Email"  style={{border:'none'}} />
                                    <button type="submit" className="suscribe-button">Subscribe</button>
                                </div>
                                
                            </div>
                        </div>
                    <div className='col-12 col-md-4 px-4'>
                            <div className='d-flex flex-column px-3'>
                                <div>
                                    <FooterHeading color='' fontSize="22px" marginBottom="30px" >
                                        Services Link
                                    </FooterHeading>
                                    <div className='d-flex flex-row justify-content-between list_link'>
                                        <ul>
                                            <li>Business</li>
                                            <li>Agency</li>
                                            <li>Social media</li>
                                            <li>Branding</li>
                                            <li>Design</li>
                                        </ul>
                                        <ul>
                                            <li>Business</li>
                                            <li>Agency</li>
                                            <li>Social media</li>
                                            <li>Branding</li>
                                            <li>Design</li>
                                        </ul>
                                    </div>
                               
                                </div>
                                
                            </div>
                        </div>
                    <div className='col-12 col-md-3 '>
                        <div className='d-flex flex-column'>
                            <div>
                                <FooterHeading color='' fontSize="22px" marginBottom="30px" >
                                    Information
                                </FooterHeading>
                            </div>
                            <div className=' p-lg-0 d-flex flex-column'>
                                
                                    
                                    <FooterSpam fontSize="16px" lineheight='24px' fontWeight='400' color="#757b82;"><FooterSpam fontSize='16px' fontWeight='600'  color="#0c54ad">
                                        Tel : 
                                    </FooterSpam>  +0890-564-5644</FooterSpam>
                                
                                    <FooterSpam fontSize="16px" lineheight='24px' fontWeight='400' color="#757b82;"><FooterSpam fontSize='16px' fontWeight='600'  color="#0c54ad">
                                        Email : 
                                    </FooterSpam>  +0890-564-5644</FooterSpam>
                                    
                                    <FooterSpam fontSize="16px" lineheight='24px' fontWeight='400' color="#757b82;"><FooterSpam fontSize='16px' fontWeight='600'  color="#0c54ad">
                                        Location : 
                                    </FooterSpam> House- 65/4, London</FooterSpam>
                                
                            </div>
                            <div className='d-flex footer_Social mt-3'>
                                <div ><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div><FontAwesomeIcon icon={faTwitter} /></div>
                                <div><FontAwesomeIcon icon={faGoogle} /></div>
                                <div><FontAwesomeIcon icon={faPinterest} /></div>
                                <div><FontAwesomeIcon icon={faInstagram} /></div>

                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </BGContainer>
    )
}

export default Footer
