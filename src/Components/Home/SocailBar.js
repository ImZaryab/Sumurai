import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faSkype,  faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneSquareAlt  } from '@fortawesome/free-solid-svg-icons'
import { faClock  } from '@fortawesome/free-regular-svg-icons'

import IconsStyled from '../../pages/StyledComponent/IconsStyled'


function SocailBar() {
    const theData = [
        {
            icon: faEnvelope,
            val: 'info@lopard3.com'
        },
    
        {
            icon: faPhoneSquareAlt,
            val: '+92333-517713'
        },
        {
            icon: faClock,
            val: 'Mon - Fri: 10:00 - 18:00'
        }

    ]
    const SocialIcons = [faFacebookF , faSkype , faTwitter , faGoogle];

    const renSocialIcons = SocialIcons.map(function(data, idx) {
        return (
            <div className="d-flex flex-row mr-2 my-auto">  
                <IconsStyled className="icon_Inner d-flex flex-row ">
                    <FontAwesomeIcon icon={data} />
                </IconsStyled>
            </div>
)
    });

    const renObjData = theData.map(function(data, idx) {
        return (
                    <div className="d-flex flex-row mr-4">  
                        <div className="icon_Inner_circle my-auto">
                            <FontAwesomeIcon icon={data.icon} />
                        </div>
                        <div className="social_info my-auto">
                             {data.val}
                        </div>
                    </div>
        )
    });
    return (
        <div className="social_navbar_area">
            <div className="socail_row row  py-2 "> 
                <div className="col-12 col-md-7  my-auto p-0 d-none d-md-block">
                    <div className="d-flex justify-content-start flex-row social_plus_info_each_upwer">
                        {renObjData}
                    </div>
                </div>
                <div className="col-12 col-md-5  my-auto px-0 d-flex justify-content-center d-md-block">
                    <div className="d-flex justify-content-end flex-row social_plus_info_each">
                        {renSocialIcons}
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default SocailBar
