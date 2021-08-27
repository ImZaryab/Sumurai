import styled from 'styled-components'
const ButtonStyled = styled.button`

    padding: ${props => props.learn? "8.7px 20px":"12.5px 20px"} !important;
    background: ${props => props.learn? props.bg :"#0c54ad"} !important;
    color: #fff;
    font-weight: ${props => props.fontWeight? props.fontWeight :"600"} !important;

    transition: 0.4s;
    font-size: ${props => props.fontSize? props.fontSize :"15px"} !important;
    font-weight: 600;
    border-radius: ${props => props.learn? "0px":"2px"} !important;
    outline:none;
    border:none;
    margin-top: ${props => props.learn? "1.3rem":""} !important;
    margin-top: ${props => props.learn? props.marginTop:""} !important;
    margin-bottom: ${props => props.learn? props.marginBottom:""} !important;
    letter-spacing: 1.08px !important;
    text-transform: capitalize;
    &:hover {
        // padding: ${props => props.learn? "8.7px 20px":"12.5px 20px"} !important;
        // border: 1px solid #0c54ad !important;
        // border: ${props => props.learn? props.border:"1px solid #0c54ad"} !important;
        background:  #fff !important;
        color: #0c54ad !important;
        color: ${props => props.learn? props.color:"#0c54ad"} !important;
        box-shadow: ${props => props.boxShadow? props.boxShadow : "0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%)"} !important;

        /* transition: 0.4s;
        font-size: 15px;
        font-weight: 600;
        border-radius: 2px;
        letter-spacing: 1.08px !important;
        text-transform: capitalize;
        outline:none !important; */
    }
`
export default ButtonStyled;