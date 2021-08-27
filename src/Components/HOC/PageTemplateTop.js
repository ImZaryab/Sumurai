import React, {useState} from 'react'
import PageStarter from '../../pages/StyledComponent/PageStarter'
import HeaderView from '../Home/HeaderView'
import NavbarCustom from '../Home/NavbarCustom'
import BreadCrumb_Cus from '../Projects/BreadCrumb_Cus'
import logo from '../../Images/bread.jpg'

function PageTemplateTop({heading}) {
    const [starter, setStarter] = useState(true)
    return (
            <PageStarter className='mb-0' bgProjects>
                <div className="home_BG_Div bg_projects d-none d-md-block">
                    <img src={logo} alt="background"/>
                </div>
                <div className='home-bg-div container bg-primary'>
                    <HeaderView/>
                    <NavbarCustom starter={starter}/>
                    <BreadCrumb_Cus heading={heading} />
                </div>
            </PageStarter>
    )
}

export default PageTemplateTop
