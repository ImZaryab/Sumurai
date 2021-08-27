import React, {useState} from 'react'
import BGContainer from '../../pages/StyledComponent/BGContainer'
import ButtonStyled from '../../pages/StyledComponent/ButtonStyled'
import Heading2Styled from '../../pages/StyledComponent/Heading2Styled'
import ParaStyled from '../../pages/StyledComponent/ParaStyled'
import ServiceContainer from '../../pages/StyledComponent/ServiceContainer'
import Service from './Section/Service'
import SpanStyled from '../../pages/StyledComponent/SpanStyled'
import '../Services/Service.css'


import Web_design from '../../Images/Web_design.png'
import Mobile_png from '../../Images/mobile_png.png'
import data_science from '../../Images/data_science.png'
import smart_contract from '../../Images/smart_contract.png'
import machine_learning from '../../Images/machine_learning.png'
import blockchain from '../../Images/blockchain.png'
import hyperledger from '../../Images/hyperledger.png'
// import w1 from '../../Images/w1.png'
// import w2 from '../../../Images/w2.png'
// import w3 from '../../../Images/w3.png'
// import w4 from '../../../Images/w4.png'
// import w5 from '../../../Images/w5.png'


function AllServices() {

    
    const [allSerive, setAllSerive] = useState([
        {
            heading:'Web Application',
            para:'Machine learning and deep learning find insights hidden in data without explicitly being told where to look or what to conclude. Our AI solutions include comprehensive, intuitive machine learning tools with automated feature engineering capabilities, resulting in better recommendations for faster, smarter decision making.',
            img: Web_design,
            bg:'light'
        },
        {
            heading:'Mobile Application',
            para:'Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.',
            img: Mobile_png,
            width: '50px',
            bg:'white'
        },
        {
            heading:'Data Science',
            para:'Data science is a "concept to unify statistics, data analysis, machine learning and their related methods" in order to "understand and analyze actual phenomena" with data. It employs techniques and theories drawn from many fields within the context of mathematics, statistics, computer science, and information science.',
            img: data_science,
            width: '100px',
            bg:'light'

        },
        {
            heading:'Smart Contract',
            para:'A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network.',
            img: smart_contract,
            bg:'white'

        },
        {
            heading:'Machine Learning',
            para:'Machine learning and deep learning find insights hidden in data without explicitly being told where to look or what to conclude. Our AI solutions include comprehensive, intuitive machine learning tools with automated feature engineering capabilities, resulting in better recommendations for faster, smarter decision making.',
            img: machine_learning,
            bg:'light'
        },
        {
            heading:'Blockchain',
            para:'Blockchain is a shared, trusted, public ledger of transactions, that everyone can inspect but which no single user controls. It is a distributed database that maintains a continuously growing list of transaction data records, cryptographically secured from tampering and revision.',
            img: blockchain,
            bg:'white'
        },
        {
            heading:'Hyperledger',
            para:'Hyperledger is an open source community focused on developing a suite of stable frameworks, tools and libraries for enterprise-grade blockchain deployments. It is a global collaboration, hosted by The Linux Foundation, and includes leaders in finance, banking, Internet of Things, supply chains, manufacturing and Technology.',
            img: hyperledger,
            bg:'light'
        },
       
    ])

    const renderItem = allSerive.map((serviceInfo => {
        return(
            <ServiceContainer bg={serviceInfo.bg} className="col-12 col-md-4">
                <Service data={serviceInfo}/>
            </ServiceContainer>
        );
    }))
    return (
        
        <BGContainer className="w-100">
            
            <div className="container p-0">
                <div className="row py-3 px-2 p-md-0 no-gutters">
                    
                    <div className="col-12 col-md-4 bg-white p-3 px-md-4 py-md-4 Service_container">
                        <Heading2Styled className="mt-3" aboutsec="33px">Digital agency <SpanStyled>services & Solutions </SpanStyled> </Heading2Styled>
                        <ParaStyled aboutsec='16px'>Our consultants opt in to the projects they genuinely want to work on.</ParaStyled>
                        <ButtonStyled learn bordeR="4.5px" bg="#0c54ad" marginTop="12px" marginBottom="20px">All Solution</ButtonStyled>
                    </div>

                    {renderItem}
                    
                    
                    
                </div>
            </div>
        </BGContainer>
    )
}

export default AllServices
