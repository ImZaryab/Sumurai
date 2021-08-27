import styled from 'styled-components'
const ServiceIMGStyled = styled.img`
    height: ${props => props.height ? props.height : "80px"};
    width: ${props => props.width ? props.width : "80px"};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
`
export default ServiceIMGStyled;