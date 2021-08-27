import React,{useState} from 'react'
import AchievementBox_Styled from '../../pages/StyledComponent/AchievementBox_Styled'
import acheiv1 from '../../Images/achive1.png'
import acheiv2 from '../../Images/achive2.png'
import acheiv3 from '../../Images/achive3.png'
import SpanStyled from '../../pages/StyledComponent/SpanStyled'
import AcheivementText from '../../pages/StyledComponent/AcheivementText'
function Achievement_box() {
    const [acheivementData, setAcheivementData] = useState([{
            img:acheiv1,
            heading: '3+',
            text:'Years Expereince'
        },{
            img:acheiv2,
            heading: '01',
            text:'Government fundings'
        },{
            img:acheiv3,
            heading: '15+',
            text:'Experts Team'
        }
    ])
    const renderItem = acheivementData.map(list =>{
        return(
            <div className="col-12 col-md-4 m-auto">
                <AchievementBox_Styled>     
                    <div className='w-40'>
                        <img src={list.img} alt="" style={{width:'100%'}}></img>
                    </div>
                    <div className='d-flex flex-column w-60'>
                        <SpanStyled fontSize="44px" weight="600" Lh='60px'>
                            {list.heading}
                        </SpanStyled>
                        <AcheivementText fontSize='21px'>
                            {list.text}
                        </AcheivementText>
                        
                    </div>
                </AchievementBox_Styled>
             </div>

        );
    })
    return (
        <>
            {renderItem}
        </>
    )
}

export default Achievement_box
