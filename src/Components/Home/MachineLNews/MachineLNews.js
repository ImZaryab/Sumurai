import React, {useState} from 'react'
import BGContainer from '../../../pages/StyledComponent/BGContainer'
import AcheivementSuccessNews from '../../HOC/AcheivementSuccessNews'
import MachineLNewsList from './Sections/MachineLNewsList'
import './Sections/MachineLNews.css'
function MachineLNews() {
    const [machineLNewstHeader, setMachineLNewstHeader] = useState(
        {
            heading:'Machine Learning News',
            text:'Dummy text is also used to demonstrate the appearance of different typefaces and layouts' 
        }
    )
    return (
        <BGContainer bg='white'>
            <div className="container p-0">
                <AcheivementSuccessNews data={machineLNewstHeader} />
                <MachineLNewsList/>
            </div>
        </BGContainer>
    )
}

export default MachineLNews
