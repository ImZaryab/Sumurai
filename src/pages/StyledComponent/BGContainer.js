import styled from 'styled-components'
const BGContainer = styled.div`
    width:100%;
    border-radius: ${props => props.borderRadius? props.borderRadius : 0} !important;
    background: ${props => props.bg?props.bg : "#f5f5f5" } !important ; 
    padding-block:5rem !important; 
    @media (max-width: 768px) { 
        padding-block: 1.8rem !important;
    }
    
`
export default BGContainer;