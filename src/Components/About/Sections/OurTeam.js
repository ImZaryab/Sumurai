import React,{useState} from 'react'
import AcheivementSuccessNews from '../../HOC/AcheivementSuccessNews'
import TeamList from './TeamList'

function OurTeam() {
    const [teamHeading, setTeamHeading] = useState(
        {
            heading:'Our Experts Team Members',
            text:'Dummy text is also used to demonstrate the appearance of different typefaces and layouts' 
        }
    )
    return (
        <div>
            <AcheivementSuccessNews data={teamHeading}/>
            <div className='row mb-4 mb-md-5'>
                <TeamList/>
            </div>
        </div>
    )
}

export default OurTeam
