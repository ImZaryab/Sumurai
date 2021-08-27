import React, { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import DP1 from '../../../Images/DP1.jpg'
import DP2 from '../../../Images/DP2.jpg'
import DP3 from '../../../Images/DP3.jpg'
import DP4 from '../../../Images/DP4.jpg'
import DP5 from '../../../Images/DP5.jpg'
import DP6 from '../../../Images/DP6.jpg'
import { Image } from 'react-bootstrap'
import './TeamList.css'
import OverlayStyled from "./OverlayStyled";
import MainDivStyled from './MainDivStyled';
import ParaStyled from '../../../pages/StyledComponent/ParaStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
// import DP7 from '../../../Images/DP7.jpg'
// import DP8 from '../../../Images/DP8.jpg'
// import DP9 from '../../../Images/DP9.jpg'
const handleDragStart = (e) => e.preventDefault();



// var items = [];

function TeamList() {
    const [items, setItems] = useState([])
    const [loading, toggleLoading] = useState(true)
    const [itemsObject, setItemsObject] = useState([
        {
            _id: 1,
            img: DP1,
            name: 'Dr.Ali Shah',
            place: 'Founder',
            facebook: 'https://www.facebook.com/',
        },
        {
            _id: 2,
            img: DP2,
            name: 'Dr.Zain Shah',
            place: 'Co-Founder',
            facebook: 'https://www.facebook.com/',

        },
        {
            _id: 3,
            img: DP3,
            name: 'Dr.Ali Shah',
            place: 'Founder',
            facebook: 'https://www.facebook.com/',

        },
        {
            _id: 4,
            img: DP4,
            name: 'Dr.Ali Shah',
            place: 'Founder',
            facebook: 'https://www.facebook.com/',

        },
        {
            _id: 5,
            img: DP5,
            name: 'Dr.Ali Shah',
            place: 'Founder',
            facebook: 'https://www.facebook.com/',

        },
        {
            _id: 6,
            img: DP6,
            name: 'Dr.Ali Shah',
            place: 'Founder',
            facebook: 'https://www.facebook.com/',
        },
    ])
    useEffect(() => {

        console.log("HELLO")
        itemsObject.forEach(itemobj => {

            items.push(
                <MainDivStyled>
                    <Image className='image' src={itemobj.img} onDragStart={handleDragStart} fluid />
                    <OverlayStyled bottom="0" opacity="0.85" zIndex="2" className="overlay">
                        <div class="d-flex flex-column justify-content-center align-content-center align-items-center h-100">
                            <ParaStyled MachineL='16px' color="white" marginBottom="10px">{itemobj.name}</ParaStyled>
                            <ParaStyled MachineL='15.5px' color="#ddd" marginBottom="12px">{itemobj.place}</ParaStyled>
                            <div className='d-flex h1 flex-row' style={{ color: '#008CBA' }}>

                                <Link to={itemobj.facebook} >
                                    <FontAwesomeIcon icon={faFacebook} className='p-2 mr-2 bg-white' />
                                </Link>
                                <Link to={itemobj.facebook} >
                                    <FontAwesomeIcon icon={faLinkedin} className='p-2 mr-2 bg-white' />
                                </Link>
                                <Link to={itemobj.facebook} >
                                    <FontAwesomeIcon icon={faInstagram} className='p-2 mr-2 bg-white' />
                                </Link>
                            </div>
                        </div>
                    </OverlayStyled>
                    <OverlayStyled top="0" opacity="0.6" zIndex="1" className="overlay2"></OverlayStyled>
                </MainDivStyled>    
            
            )
        })
        console.log(items);

        setItems(items)
        toggleLoading(false)        
    }, [])
    // setItems([])




    const responsive = {
        0: {
            items: 1,
        },
        1024: {
            items: 4
        }
    }

    return (
        loading ? null :
        
            <div className="col-12">
            <AliceCarousel mouseTracking responsive={responsive} items={items} />
        </div>
        
            
    )
}

export default TeamList
