import styled from 'styled-components'
const ParaStyled = styled.p`
    color: ${props => props.color ? props.color : "#757b82"} !important;
    font-size: ${props => props.aboutsec ? "16px !important" : "18px " } !important;
    font-size: ${props => props.aboutsec ? props.aboutsec : "18px " } !important;
    font-size: ${props => props.MachineL ? props.MachineL : "18px " } !important;
    margin: 0 0 15px !important;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : " 1.56rem " } !important;
    line-height: ${props => props.lineHeight ? props.lineHeight : "" } !important;
    opacity: ${props => props.opacity ? props.opacity : "" } !important;
    @media (max-width: 768px) { 
        font-size: ${props => props.aboutsec ? "13px !important" : "15px " } !important;
        font-size: ${props => props.aboutsec ? props.aboutsec : "15px " } !important;
        font-size: ${props => props.MachineL ? props.MachineL : "18px " } !important;

        margin: 0 0 9px !important;
        margin-bottom: 1rem !important;
        color: #757b82 !important;
      }
`
export default ParaStyled;