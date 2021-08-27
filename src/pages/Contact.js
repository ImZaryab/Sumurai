import React,{useState} from 'react'
import Content from '../Components/Contacts/Content'
import PageTemplateTop from '../Components/HOC/PageTemplateTop'
import '../Components/Contacts/Sections/Contacts.css'
import { faEnvelopeOpenText, faLocationArrow, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import BGContainer from './StyledComponent/BGContainer'
import ContactMe from '../Components/Contacts/ContactMe'
function Contact() {

    const [cardItemsList, setCardItemsList] = useState([
        {
            _id : 1,
            img: faMobileAlt,
            text1: 'Call : +0011-564-543',
            text2: 'Monday-Friday (10am-18pm)'
        },
        {
            _id : 2,
            img: faEnvelopeOpenText,
            text1: 'Email : lopard3@gmail.com',
            text2: 'Web: www.rockstheme.com'
        },
        {
            _id : 3,
            img: faLocationArrow,
            text1: 'Location : Newyork city',
            text2: '23 house/3 Road'
        },
    ])
    const renderItem = cardItemsList.map(item=>{
        return(
            <Content item={item}/>
        )
    })
    return (
        <>
            <PageTemplateTop heading="Contact" />
            <BGContainer bg='white'>
                <div className='container'>
                    <div className='row mb-5'>
                        {renderItem}
                    </div>
                    <ContactMe/>
                    
                </div>
            </BGContainer>
            
        </>
    )
}

export default Contact
