import React, { useState } from 'react'
import PageTemplateTop from '../Components/HOC/PageTemplateTop'
import ProjectsList from '../Components/Projects/ProjectsList'
import {useParams} from "react-router-dom";


// import img from '../Images/ef.png'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'


import Trader_img from '../Images/Trader-Base.png'
import Omnis_img from '../Images/OMNIS-BIT.png'
import Altron from '../Images/ALTRON.png'
import Alga_img from '../Images/Alga.png'
import Pika_img from '../Images/pika_coin.png'
import Gamefi_img from '../Images/Gamefi_img.jpg'

import HelpDesk_img from '../Images/helpDesk_img.png'
import AI_bussiness_img from '../Images/Ai_bussiness_boost.png'
import AI_article from '../Images/AI_article.png'
import Ston_AI from '../Images/StonAI_img.png'

function Projects() {






    let { category } = useParams();

    const [Blockchainprojects, setProjects] = useState([
        {
            img: Trader_img,
            width: '300px',
            height: '245px',
            heading:'Trader Base',
            text:'This project uses the cryptocurrency data to guide the user in making trades. it has two phases: the first phase is to use cryptocurrency API to fetch all the data in real-time. From this API, the system will provide query-based interfaces, where a proper syntax will be used to extract the required information. Apart from this, an analysis toolkit will be given so that the user can perform different forms of analysis. Finally, we will be providing an admin panel to control the client-side application. The aim is to develop a generic, plug & play system that allows us to add more components without increasing manpower.'
        },
        {
            img: Omnis_img,
            width: '290px',
            height: '245px',
            heading:'OMNIS-BIT',
            text:'OMNIS-BIT is a unique freelancer blockchain solution both on ETEHREUM and TRON blockchain. Currency used in this Dapp is OMB token hosted on TRON blockchain. Both Employer and Freelancer\'s Interest is secured through escrow and smart contracts. Freelancers can Create a Skill for Employers to approach and post orders or Employers can Post a project which would show up on Freelancers feed and they can bid upon it.'
        },
        {
            img: Altron,
            width: '300px',
            height: '245px',
            heading:'ALTRON',
            text:'ALTRON Its an Investment Dapp which operated on TRON blockchain. It Operated on Aril Token which can be bought on JustSwap. Basically it was built for Aril Company whose sole purpose was to launch there token in the market and Regulate it for launching of there own private blockchain and a Taxi Application which would be operating on Aril Coin'
        },
        {
            img: Alga_img,
            width: '280px',
            height: '245px',
            heading:'ALGA',
            text:'We developed a mobile application for the Ocean Marketplace. The project was designed to help their user in trading and analyzing different data tokens available in the ocean marketplace. The application allows user to monitor and analyze trends of their favorite data tokens. Moreover, the application also allows users to add their wallet. The system also allows user to monitor certain transactions that would help in generating more revenue in the future. Finally, an AI component to assist users in predicting future trends, which also help in generating more revenue for the users.'
        },
        {
            img: Gamefi_img,
            heading:'PIKA',
            width: '350px',
            height: '245px',
            text:'PIKA Crypto is an ERC-20 project that has a whole ecosystem to it. This ecosystem will have 3 different coins: PIKA, THUNDER & RAI. We are setting the standard with NFT card booster packs, evolutionary staking and deflationary tokenomics, which is just some of our electrifying features. Members of Pika Crypto have unlimited choices in how they decide to profit. You can evolve to our Thunder and Rai coins. These allow you to access rarer NFTs and booster packs. Alternatively you can stake, allowing you receive passive income every fortnight. Sit back and watch the supply run down as more transactions happen. Our charts are bot free due to our 2.25 % entry and exit fee so no need to worry about being frontrun. Welcome to Pika Crypto. Where the possibilities are endless.'
        },
        {
            img: img6,
            heading:'True Crime',
            text:'True Crime is an NFT marketplace & trading card game, developed on top of Cardano Blockchain. The card game is developed by a top notch game studio called \'Studio Rendezvous\' which is based in the U.S and the NFT marketplace is developed by us.'
        },
    ]);
    const [aIprojects, setAIprojects] = useState([
        {
            img: HelpDesk_img,
            width: '300px',
            height: '260px',
            heading:'Help Desk Solution',
            text:'The system is developed by the name of chappie. The aim of the system is to assist agent in calling on different marketing campaigns. Chappie has an custom developed VOIP solution in which we developed everything from scrap. We have also developed state-of-the-art solution that allows the owner to replace the HUMAN agent with the AI based BOT. The Bot will be handling the marketing conversation without letting the user on the phone know about it'
        },
        {
            img: AI_bussiness_img,
            width: '300px',
            height: '245px',
            heading:'AI based business intelligence solution to boost sales',
            text:'This solution is developed for a company in Singapore. Our solution is a software system that analyses and provides visualization of consumer\'s spending trends using machine learning techniques on consumer\'s expenditures to gain insights into their demands and to observe patterns in their spending habits.'
        },
        {
            img: AI_article,
            width: '300px',
            height: '245px',
            heading:'Information Extraction from news articles',
            text:'This project was among the most challenging project in which we have to extract building amenities from the news articles. This kind of task is also limited in current state-of-the-art research, which shows its complexity. We delivered the product with a quite good accuracy. Moreover, we developed a state-of-the-art algorithm already published in a journal.'
        },
        {
            img: img4,
            width: '300px',
            height: '245px',
            heading:'Smart Logistics Solution',
            text:'LoadEx is a mobile app developed to help the transportation business. The solution provides bidding, smart sharing of commodities, dynamic billing and many other facilities. The solution uses AI to reduce the commute cost, which in term reduces the fare.'
        },
        {
            img: Alga_img,
            width: '280px',
            height: '245px',
            heading:'ALGA',
            text:'We developed a mobile application for the Ocean Marketplace. The project was designed to help their user in trading and analyzing different data tokens available in the ocean marketplace. The application allows user to monitor and analyze trends of their favorite data tokens. Moreover, the application also allows users to add their wallet. The system also allows user to monitor certain transactions that would help in generating more revenue in the future. Finally, an AI component to assist users in predicting future trends, which also help in generating more revenue for the users.'
        },
        {
            img: Ston_AI,
            width: '280px',
            height: '225px',
            heading:'StonAI',
            text:'In the construction industry, a contractor and client has to deal with many document having hundreds of pages. This makes the life difficult for the manager to resolve conflicts or handle day to day activities. Therefore, this project focuses on extracting key knowledge from the contracts, meetings, and other formal documents. The system allows user to store, search, and produce documents using machine / deep learning. The system has automated so many processes that it reduces almost 50% activities of the construction company and client.'
        },
    ]);
    const [nlpprojects, setNlpprojects] = useState([
        {
            img: AI_article,
            width: '300px',
            height: '245px',
            heading:'Information Extraction from news articles',
            text:'This project was among the most challenging project in which we have to extract building amenities from the news articles. This kind of task is also limited in current state-of-the-art research, which shows its complexity. We delivered the product with a quite good accuracy. Moreover, we developed a state-of-the-art algorithm already published in a journal.'
        },
        {
            img: img3,
            width: '300px',
            height: '245px',
            heading:'Criminal Forensic',
            text:'*Yet To Be Added*'
        },
        {
            img: Ston_AI,
            width: '280px',
            height: '225px',
            heading:'StonAI',
            text:'In the construction industry, a contractor and client has to deal with many document having hundreds of pages. This makes the life difficult for the manager to resolve conflicts or handle day to day activities. Therefore, this project focuses on extracting key knowledge from the contracts, meetings, and other formal documents. The system allows user to store, search, and produce documents using machine / deep learning. The system has automated so many processes that it reduces almost 50% activities of the construction company and client.'
        },
        {
            img: img4,
            width: '300px',
            height: '245px',
            heading:'Real Estate',
            text:'*Yet To Be Added*'
        },
        {
            img: img5,
            width: '300px',
            height: '245px',
            heading:'NLP Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img6,
            width: '300px',
            height: '245px',
            heading:'NLP Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
    ]);
    
    const [selectedCategory, setSelectedCategory] = useState(category)

    var renderItem;

    if (selectedCategory === "BlockChain") {
        renderItem = <ProjectsList data={Blockchainprojects}/>
        
    }else if (selectedCategory === "Artificial-Intelligence") {
        renderItem = <ProjectsList data={aIprojects}/>
        
    }else{
        renderItem = <ProjectsList data={nlpprojects}/>
    }
    console.log(renderItem);
    // const renderItems = () => {
    //     if (selectedCategory === "BlockChain") {
    //         console.log('hahha')
    //         return( )
    //     } else {
    //       return  ;
    //     }
    //   }

    // useEffect(() => {
    //     // console.log(category);
    //     Promise.resolve()
    //     .then(() => { setSelectedCategory(category)})
    //     .then(() => console.log(`state is  `+selectedCategory))

    //     console.log(`catogory is  ` + category);
    // }); 

    
    // let blockC = "BlockChain";
    // let Ai = "Artificial-Intelligence";
    // let nlp = "nlp";

    // console.log(blockC === category);
    // console.log(Ai === category);
    // console.log(nlp === category);
    // const renderItem={
    //     if(category === nlp){
    //         return <ProjectsList/>  
    //     }
    // }
    
    // console.log(category);
    return (
        <>
            <PageTemplateTop heading="Project" />
            {renderItem}
            
        </>

    )
}

export default Projects
