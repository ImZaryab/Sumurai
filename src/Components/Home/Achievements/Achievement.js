import React, {useState} from 'react'
import BGContainer from '../../../pages/StyledComponent/BGContainer'
import AcheivementSuccessNews from '../../HOC/AcheivementSuccessNews'
import Achievement_box from '../../HOC/Achievement_box'
import AcheivmentList from './Sections/AcheivmentList'


import './Sections/Achievement.css'
function Achievement() {
    const [achivementHeader, setAchivementHeader] = useState(
        {
            heading:'Our Achievement',
            text:'Dummy text is also used to demonstrate the appearance of different typefaces and layouts' 
        }
    )
    return (
        <BGContainer>
            <div className="container mx-auto">
                <AcheivementSuccessNews data={achivementHeader} />
                <div className="row m-0 mb-5"> 
                    <Achievement_box/> 
                </div>
                <div className="row m-0 my-5">
                    <div className="col-10 col-md-12 mx-auto ">
                        <div className="empty_line">
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <AcheivmentList/>
                </div>
            </div>
        </BGContainer>
    )
}

export default Achievement
