import styled from 'styled-components'
const PageStarter = styled.div`
    height: ${props=>props.bgProjects ? "505px" : "740px"} !important;
    background-image:${props=>props.bgProjects ? "" : "url('./Images/bg.jpg')"} !important;
    color:${props=>props.bgProjects ? "white" : ""} !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`
  export default PageStarter;