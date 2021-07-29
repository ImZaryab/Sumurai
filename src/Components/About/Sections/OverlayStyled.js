
import styled from 'styled-components'
const OverlayStyled = styled.div`
    position: absolute;
    bottom: ${props => props.bottom ? props.bottom : ""};
    left: 0;
    right: 0;
    top:${props => props.top ? props.top : ""};
    background-color: #008CBA;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 1s ease !important;
    opacity: ${props => props.opacity ? props.opacity : ""} 
    z-index: ${props => props.zIndex ? props.zIndex : ""};
    
`
export default OverlayStyled;