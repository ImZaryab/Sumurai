import React, {  Component } from 'react'
import '../Home/Home.css'
import logo_N from '../../Images/WebsiteLogo.png';
import logo_white from '../../Images/WebsiteLogo_white.png';
import { Link } from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight  } from '@fortawesome/free-solid-svg-icons'
import ButtonStyled from '../../pages/StyledComponent/ButtonStyled';

export default class NavbarCustom extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () =>{
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div className="Navbar_row row  py-2 mb-5">
                <div className={`${this.props.starter ? 'navbar_c navlist_custom_styling py-5' : 'navbar_c'}`}>
                    <div className="nav-header">
                        <Link to="/">
                           {this.props.starter?<> <img src={logo_N} className="d-block d-md-none" alt="Sumurai" width="160px"/>  <img src={logo_white} className="d-none d-md-block" alt="Sumurai" width="180px"/> </>: <img  id="HomeLogo" src={logo_N} alt="Sumurai" height="130%" width="90%"/>}
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FontAwesomeIcon icon={faAlignRight}/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?`nav-links show-nav`:`nav-links my_auto set_margin_right ` }>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li> 
                        <li>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>  
                        <li>
                            <Link to="/services">
                                Services
                            </Link>
                        </li>
                        <li>

                        <Dropdown>
                            <Dropdown.Toggle className='px-2 m-0' id="Projects">
                                
                            </Dropdown.Toggle>

                            <Dropdown.Menu id="dropDownMenu">
                                <Dropdown.Item href="/projects/BlockChain">BlockChain</Dropdown.Item>
                                <Dropdown.Item href="/projects/Artificial-Intelligence">Artificial Intelligence</Dropdown.Item>
                                <Dropdown.Item href="/projects/nlp">NLP</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            {/* <Link to="/projects">
                                Projects
                            </Link> */}
                        </li>
                        <li>
                            <Link to="/contact" style={{marginLeft:'5px'}}>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                    <div className="d-none d-md-block nav-btn my-auto">
                        <ButtonStyled  className='btn  py-2 px-4 text-white'>Get in touch</ButtonStyled>
                    </div>
                </div>
            
            </div>
        )
    }
}
