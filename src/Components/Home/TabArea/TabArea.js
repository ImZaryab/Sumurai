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
        heading:"Design and development of enterprise smart solutions",
        text:"AI is among the trending activity that help boost the business activities. In this frame of mind, our goal is to provide unique, flexible, and robust solution to help businesses in improving their process control. We have proven capability in development of smart solutions.",
        bulletsData: ["Enterprise level smart solution", "Business intelligence", "Image processing", "Knowledge engineering and blockchain solutions"],
        img:img2,
        bullets: ["1", "2", "3", "4"]
    })
    const [blockChain, setblockChain] = useState({
        heading:"Blockchain based Solutions",
        text:"Blockchain is a cutting-edge technology that provide security, flexibility, and robustness in many enterprise application. We are proud to say that we are among the few providers to provide services in blockchain and AI together. ",
        bulletsData: ["Blockchain based enterprise solutions", "Crypto currencies development", "NFT marketplace", "Smart Contract"],
        img:img1,
        bullets: ["1", "2", "3", "4"]
    })
    const [nlp, setNlp] = useState({
        heading:"Natural Language Processing Solutions",
        text:"Since the advent of web 3.0, data and information has been widely spread on the web. The aim of NLP is attendance knowledge from the web, later use it to solve complex problem. In today's world, \"knowledge is power\", so Natural Language Understanding (NLU) is helping current businesses in reducing their cost of doing business.",
        bulletsData: ["Enterprise process control automation", "Natural Language Understanding", "Knowledge engineering and discovery", "Semantic web"],
        img:img4,
        bullets: ["1", "2", "3", "4"]
    })
    const [mobileAndweb, setMobileAndweb] = useState({
        heading:"Enterprise Mobile and Web Solutions",
        text:"Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
        bulletsData: ["Android & IOS Applications", "Web Applications", "Smart applications", "Blockchain based applications"],
        img:img3,
        bullets: ["1", "2", "3", "4"]
    })
    return (
        <BGContainer bg="white">
            <div className="container p-0 ">
                <Tabs defaultActiveKey="blockChain" id="uncontrolled-tab-example" className="w-100 d-flex flex-column flex-md-row " style={{border:'none'}}>
                    <Tab eventKey="blockChain" className="w-100" title={
                    <div className="d-flex flex-row title_style" >
                        <img src={w3} alt="" className="tab_img" />
                        <span class='tab_span_text'>blockChain</span>
                    </div>
                    }   >

                        <AboutSection data={blockChain} />
                    </Tab>
                    
                    <Tab eventKey="artificial" className="w-100" title={
                   <div className="d-flex flex-row title_style" >
                   <img src={w3} alt="" className="tab_img" />
                        <span class='tab_span_text'>Artificial Intelligence</span>
                    </div>
                    }   >
                        <AboutSection data={artificial } />
                    </Tab>

                    <Tab eventKey="NLP" className="w-100" title={
                    <div className="d-flex flex-row title_style" >
                    <img src={w3} alt="" className="tab_img" />
                        <span class='tab_span_text'>NLP</span>
                    </div>      
                    }   >
                        <AboutSection data={nlp} />
                    </Tab>

                    <Tab eventKey="MobileAndweb" className="w-100" title={
                    <div className="d-flex flex-row title_style" >
                    <img src={w3} alt="" className="tab_img" />
                        <span class='tab_span_text'>Mobile And Web Development</span>
                    </div>
                    }   >
                        <AboutSection data={mobileAndweb} />
                    </Tab>
                </Tabs>
            </div>
        </BGContainer>
    )
}

export default TabArea
