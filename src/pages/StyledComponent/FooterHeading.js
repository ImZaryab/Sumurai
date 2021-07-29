import styled from 'styled-components'
const FooterHeading = styled.h4`
    color: ${props => props.fontSize ? props.fontSize : "#2a354e"};
    font-size: ${props => props.fontSize ? props.fontSize : "48px"};
    font-weight: ${props => props.aboutsec ? "600" : "600"};
    line-height: ${props => props.aboutsec ? "48px" : "58px"};
    line-height: ${props => props.lineheight ? props.lineheight : "58px"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : "600"};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
    max-width: 100%;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: ${props => props.fontSize ? props.fontSize : "30px"};
        font-weight: ${props => props.aboutsec ? "600" : "600"};
        line-height: ${props => props.aboutsec ? "30px" : "40px"};
        margin-bottom: 20px;
      }
`
export default FooterHeading;