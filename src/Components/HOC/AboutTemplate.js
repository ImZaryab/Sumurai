import React,{useState} from 'react'
import AboutSection from '../About/AboutSection'
import img from '../../Images/ab.png'
function AboutTemplate() {
    const [isbtn, setIsbtn] = useState(true)
    const [templateData, setTemplateData] = useState([
        {
        img:img,
        bulletsData: ["Enterprise level smart solution", "Blockchain and AI solutions", "Natural Language Understanding", "Mobile & Web Applications"],
        heading :'A TRUE INNOVATION PARTNER.',
        text: "We are a firm wanting to develop the future. Our motto is to develop the future with skill, art, knowledge, and discipline. We intend to complex and innovative solutions with cutting-edge technologies. Since 2019, those who have worked with us have recognized us to be the best in the business. To the best of our knowledge, we are the only company bringing together blockchain and AI. We provide: ",
    }
    ])
    const renderitems = templateData.map(item => {
        return(
            <AboutSection data={item} isBtn={isbtn}/>
        );
    })
    return (
    <>
        {renderitems}
    </>

    )
}

export default AboutTemplate
