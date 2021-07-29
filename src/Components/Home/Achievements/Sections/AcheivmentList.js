import React, {useState} from 'react'
import {Image} from 'react-bootstrap'
import AcheivementText from '../../../../pages/StyledComponent/AcheivementText'
import img1 from '../../../../Images/list1.png'
import img2 from '../../../../Images/list2.png'
import img3 from '../../../../Images/list3.png'
import img4 from '../../../../Images/list4.png'
import img5 from '../../../../Images/list5.png'
function AcheivmentList() {
     
    const [acheivementList, setAcheivementList] = useState([
        {
            _id: 1,
            img: img1,
            text: 'Blockchain'
        },
        {
            _id: 2,
            img: img2,
            text: 'Artificial Intelligence'
        },
        {
            _id: 3,
            img: img3,
            text: 'NLP'
        },
        {
            _id: 4,
            img: img4,
            text: 'Mobile Developement'
        },
        {
            _id: 5,
            img: img5,
            text: 'Web Development'
        },
    ]) 
    const rendenListAcheivement = acheivementList.map((item)=>{
        return(
            <div className="w-100 w-md-20 bg-light AcheivementList">
                <div className='w-50 mx-auto'>
                    <Image src={item.img} rounded />
                </div>
                <div>
                    <AcheivementText fontSize='20px' style={{marginTop:'1.1rem'}}>
                        {item.text}
                    </AcheivementText>
                </div>
            </div>
        );
    })
    return (
        <div className="w-100 d-flex flex-column flex-md-row">
            {rendenListAcheivement}
        </div>
    )
}

export default AcheivmentList
