import React, {useState} from 'react'
import BGContainer from '../../../pages/StyledComponent/BGContainer'
import './Sections/TabArea.css'
import {Tabs,Tab} from 'react-bootstrap'
import img1 from '../../../Images/cd.png'
import img2 from '../../../Images/ef.png'
import img3 from '../../../Images/gh.png'
import img4 from '../../../Images/ij.png'

import w3 from '../../../Images/w3.png'
import AboutSection from '../../About/AboutSection'
function TabArea() {

    const [artificial, setArtificial] = useState({
        heading:"Enterprise AI and data platform solutions",
        text:"Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical",
        img:img2,
    })
    const [blockChain, setblockChain] = useState({
        heading:"Enterprise AI and data platform solutions",
        text:"Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical",
        img:img1,
    })
    const [nlp, setNlp] = useState({
        heading:"Design and development use latest technology",
        text:"And in general the content of dummy text is nonsensical. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Dummy text is also used to demonstrate the appearance of different typefaces and layouts",
        img:img4,
    })
    const [mobileAndweb, setMobileAndweb] = useState({
        heading:"Artificial intelligence use in automobile industry",
        text:"Used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical",
        img:img3,
    })
    return (
        <BGContainer bg="white">
            <div className="container p-0 ">
                <Tabs defaultActiveKey="blockChain" id="uncontrolled-tab-example" className="w-100 d-flex flex-column flex-md-row " style={{border:'none'}}>
                    <Tab eventKey="blockChain" className="w-100" title={
                    <div className="d-flex flex-row title_style" >
                        <img src={w3} className="tab_img" />
                        <span class='tab_span_text'>blockChain</span>
                    </div>
                    }   >

                        <AboutSection data={blockChain} />
                    </Tab>
                    
                    <Tab eventKey="artificial" className="w-100" title={
                   <div className="d-flex flex-row title_style" >
                   <img src={w3} className="tab_img" />
                        <span class='tab_span_text'>Artificial & Intelligence</span>
                    </div>
                    }   >
                        <AboutSection data={nlp} />
                    </Tab>

                    <Tab eventKey="NLP" className="w-100" title={
                    <div className="d-flex flex-row title_style" >
                    <img src={w3} className="tab_img" />
                        <span class='tab_span_text'>NLP</span>
                    </div>      
                    }   >
                        <AboutSection data={mobileAndweb} />
                    </Tab>

                    <Tab eventKey="MobileAndweb" className="w-100" title={
                    <div className="d-flex flex-row title_style" >
                    <img src={w3} className="tab_img" />
                        <span class='tab_span_text'>Mobile And Web Development</span>
                    </div>
                    }   >
                        <AboutSection data={artificial} />
                    </Tab>
                </Tabs>
            </div>
        </BGContainer>
    )
}

export default TabArea
