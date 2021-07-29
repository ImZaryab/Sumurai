import styled from 'styled-components'
const ServiceContainer = styled.button`
    padding: 36px 30px !important;
    border: 1px solid #fff;
    position: relative;
    min-height: 300px;
    text-align: left;
    background : ${props=> props.bg? props.bg :'' } !important;
    box-shadow: ${props=> props.bg === 'white'? '0 5px 25px rgb(0 0 0 / 10%);': '' };
    display:flex;
    flex-direction:column;
   
    ${props=> props.bg !== 'white'? `
    &:hover {
        box-shadow: 0 5px 25px rgb(0 0 0 / 10%) !important; 
        background : white !important;
    }`: '' }
`
export default ServiceContainer;