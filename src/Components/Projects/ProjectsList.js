import React, { useState } from 'react'
import Project from './Sections/Project'

import BGContainer from '../../pages/StyledComponent/BGContainer'
function ProjectsList({data}) {
    // const [projects, setProjects] = useState([
    //     {
    //         img: img1,
    //         heading:'Data Collection',
    //         text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
    //     },
    //     {
    //         img: img2,
    //         heading:'Data Collection',
    //         text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
    //     },
    //     {
    //         img: img3,
    //         heading:'Data Collection',
    //         text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
    //     },
    //     {
    //         img: img4,
    //         heading:'Data Collection',
    //         text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
    //     },
    //     {
    //         img: img5,
    //         heading:'Data Collection',
    //         text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
    //     },
    //     {
    //         img: img6,
    //         heading:'Data Collection',
    //         text:'Data Collection Our development opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.'
    //     },
    // ]);
    
    const renderProject = data.map(project =>
        {
        return(
            <Project data={project}/>
        )
    })
    

    return (
        <BGContainer bg='white' >
            <div className="container">
                <div className='row mt-5'>
                    {renderProject}
                </div>
            </div>
        </BGContainer>
    )
}

export default ProjectsList
