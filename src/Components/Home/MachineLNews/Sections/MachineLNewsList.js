import React, {useState} from 'react'
import Card from './Card'
import mln1 from '../../../../Images/mln1.jpg'
import mln2 from '../../../../Images/mln2.jpg'
import mln3 from '../../../../Images/mln3.jpg'
function MachineLNewsList() {
    const [cardItemsList, setCardItemsList] = useState([
        {
            _id : 1,
            img: mln1,
            heading: 'Creative design clients response is better'
        },
        {
            _id : 2,
            img: mln2,
            heading: 'Web development is a best work in future world'
        },
        {
            _id : 3,
            img: mln3,
            heading: 'You can trust me and business with together'
        },
    ])
    const renderItem = cardItemsList.map(item=>{
        return(
            <Card key={item._id} data={item}/>
        )
    })
    return (
        <div className='row p-0'>
            {renderItem}
        </div>
    )
}

export default MachineLNewsList
