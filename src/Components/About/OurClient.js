import React,{useState} from 'react'
import AcheivementSuccessNews from '../HOC/AcheivementSuccessNews'
import ClientList from './Sections/ClientList'

function OurClient() {
    const [clientHeading, setClientHeading] = useState(
        {
            heading:'Our Clients',
            text:'Dummy text is also used to demonstrate the appearance of different typefaces and layouts' 
        }
    )
    return (
        <>
           <AcheivementSuccessNews data={clientHeading}/> 
            <div className='row'>
                <ClientList/>
            </div>
        </>
    )
}

export default OurClient
