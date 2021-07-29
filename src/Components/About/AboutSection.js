import React from 'react'
import IMGSection from './Sections/IMGSection'
import './About.css';
function AboutSection({data, isBtn}) {
    return (
        <div className={`container p-0  ${isBtn ? '' : 'px-md-4'}`}>
            <div className= {`row no-gutters ${isBtn? 'py-5': 'pt-3'}`}>
                <IMGSection data={data} isBtn={isBtn}/>
            </div>
        </div>
    )
}

export default AboutSection
