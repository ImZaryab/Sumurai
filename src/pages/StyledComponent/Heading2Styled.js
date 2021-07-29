import styled from 'styled-components'
const Heading2Styled = styled.h2`
    opacity: ${props => props.opacity ? props.opacity : "" } !important;
    color: ${props => props.color ? props.color : "#2a354e"};
    font-size: ${props => props.fontSize ? props.fontSize : "48px"};
    font-weight: ${props => props.aboutsec ? "600" : "600"};
    line-height: ${props => props.aboutsec ? "48px" : "58px"};
    line-height: ${props => props.lineheight ? props.lineheight : "58px"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : "600"};
    padding: ${props => props.padding ? props.padding : ""};
    cursor: pointer;
    text-decoration: none;
    max-width: 100%;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : "20px"};
    @media (max-width: 768px) {
        font-size: ${props => props.fontSize ? props.fontSize : "30px"};
        font-weight: ${props => props.aboutsec ? "600" : "600"};
        line-height: ${props => props.aboutsec ? "30px" : "40px"};
        margin-bottom: 20px;
      }
`
export default Heading2Styled;