import styled from 'styled-components'
const HeadingService = styled.h5`
    font-size: ${props => props.fontSize ? props.fontSize : "24px"};
    line-height: 30px;
    text-transform: capitalize;
    font-weight:"500";
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
`
export default HeadingService;