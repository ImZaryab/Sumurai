import styled from 'styled-components'
const SpanStyled = styled.span`
    font-size: ${props => props.fontSize? props.fontSize: 'inherit' }
    color: ${props => props.color? props.color: '#0c54ad' };
    font-weight: ${props => props.weight? props.weight: 'inherit' };
    line-height: ${props => props.Lh? props.Lh: 'inherit' };;
`
export default SpanStyled;