import React,{useState} from 'react'
import DrawPics from './DrawPics'

import ITEM from './ITEM'
import { faLayerGroup, faShoppingCart, faUser  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FirstRow() {

    const [drawData, setDrawData] = useState([
        {
            _id:1,
            content:"'2'",
            color:"#0c54ad",
            icon :faLayerGroup,
            heading:"Attention To Details Of Your Project",
            text:"We have a team of dedicated business development managers responsible for driving a pipeline of new business."
        },
        {
            _id:2,
            content:"'8'",
            color:"#b91ca8;",
            icon :faUser,
            heading:"Building Experts Team For Your Requirement",
            text:"We have a team of dedicated business development managers responsible for driving a pipeline of new business."
        
        },
        {
            _id:3,
            content:"'5'",
            color:"#1AA15F",
            icon :faShoppingCart,
            heading:"Show Result And On Time Delivery",
            text:"We have a team of dedicated business development managers responsible for driving a pipeline of new business."
        
        },
    ])
     const renderItem = drawData.map(item=>{
        return(
            <ITEM key={item._id} item={item}/>
        )
    })
    return (
        <div className="row p-0 mb-5">
            {renderItem}
        </div>
    )
}

export default FirstRow
