

import styled from 'styled-components'
const Contact_Div = styled.div`

    padding:  ${props=> props.padding ? props.padding:'0px' } !important;
    background: ${props=> props.bg ? props.bg:'transparent' } !important;
    margin-bottom: ${props=> props.marginBottom ? props.marginBottom:'' } !important;
    border-radius: ${props=> props.borderRadius ? props.borderRadius:'' } !important;
    box-shadow: 0 5px 25px rgb(0 0 0 / 10%);
    position: relative;
    z-index: 1;
`
export default Contact_Div;