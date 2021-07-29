import React, { useState, useEffect } from 'react'
import PageTemplateTop from '../Components/HOC/PageTemplateTop'
import HeaderView from '../Components/Home/HeaderView'
import HomeBody from '../Components/Home/HomeBody'
import NavbarCustom from '../Components/Home/NavbarCustom'
import BreadCrumb_Cus from '../Components/Projects/BreadCrumb_Cus'
import ProjectsList from '../Components/Projects/ProjectsList'
import PageStarter from './StyledComponent/PageStarter'
import {useParams} from "react-router-dom";
import Project from '../Components/Projects/Sections/Project'
// import img from '../Images/ef.png'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'

function Projects() {






    let { category } = useParams();

    const [Blockchainprojects, setProjects] = useState([
        {
            img: img1,
            heading:'Data Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img2,
            heading:'Data Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img3,
            heading:'Data Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img4,
            heading:'Data Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img5,
            heading:'Data Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img6,
            heading:'Data Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
    ]);
    const [aIprojects, setAIprojects] = useState([
        {
            img: img1,
            heading:'AI Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img2,
            heading:'AI Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img3,
            heading:'AI Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img4,
            heading:'AI Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img5,
            heading:'AI Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img6,
            heading:'AI Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
    ]);
    const [nlpprojects, setNlpprojects] = useState([
        {
            img: img1,
            heading:'NLP Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img2,
            heading:'NLP Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img3,
            heading:'NLP Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img4,
            heading:'NLP Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img5,
            heading:'NLP Collection',
            text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
        },
        {
            img: img6,
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
