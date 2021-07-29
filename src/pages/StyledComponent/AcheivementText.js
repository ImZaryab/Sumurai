import styled from 'styled-components'
const AcheivementText = styled.div`
    font-size: ${props => props.fontSize? props.fontSize: 'inherit' }
    color: #2a354e;
    text-transform: capitalize;
    font-weight: 500;
`
export default AcheivementText;