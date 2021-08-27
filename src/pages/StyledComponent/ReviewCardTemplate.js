import styled from 'styled-components'
const ReviewCardTemplate = styled.div`
    padding:  ${props=> props.padding ? props.padding:'0px' } !important;
    background: ${props=> props.bg ? props.bg:'transparent' } !important;
    margin-bottom: ${props=> props.marginBottom ? props.marginBottom:'' } !important;
    border-radius: ${props=> props.borderRadius ? props.borderRadius:'' } !important;
    height: ${props=> props.height ? props.height:'' } !important; 
    width: ${props=> props.width ? props.width:''} !important;
    margin-left: ${props=> props.marginLeft ? props.marginLeft:''} !important;
    margin-right: ${props=> props.marginRight ? props.marginRight:''} !important;

`
export default ReviewCardTemplate;