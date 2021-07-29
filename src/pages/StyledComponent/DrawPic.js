import styled from 'styled-components'
const DrawPic = styled.div`
    width: 100px;
    height: 100px;
    margin-bottom: 1.7rem;
    font-size: 36px;
    box-shadow: 0 5px 25px rgb(0 0 0 / 10%) !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: white;
    border-radius: 50%;  
    position: relative; 
    
    color: ${props => props.color ? props.color : ""} !important;   
    &:before{
        content: ${props => props.content ? props.content : ""}; 
        padding: 12px;
        font-size: 16px;
        color: #fff !important;
        height: 35px;
        width: 35px;
        background: ${props => props.bg ? props.bg : ""} !important;  
        border: ${props => props.bg ? props.bg : ""} !important;
        border-radius: 50%;
        position: absolute;
        top: -8px;
        left: -8px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export default DrawPic;