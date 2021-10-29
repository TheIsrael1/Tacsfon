import styled from 'styled-components'

export const UpcomingContainer = styled.div`
height: auto;
display: flex;
flex-direction: column;
justify-content: top;
// align-items:center;
padding: 0 1rem 2rem;
background: #f9f9f9;
overflow: hidden;

@media screen and (max-width: 768px){
    // height: 1300px;
}

@media scrren and (max-width: 400px ){
    // height: 1300px;
}
`

export const UpcomingWrapper = styled.div`
// max-width: 1200px;
// margin: 0 auto;
// display: grid;

`
export const UpcomingH1 = styled.h1`
margin: 0 auto;
font-size: 2.5rem;
color: #010606;
padding: 0 1rem;
margin-bottom: 64px;

@media screen and (max-width: 480px){
font-size: 1.5rem;
}
`
export const TimeLine = styled.ul`
border-left: 4px solid #01BF71;
border-bottom-right-radius: 4px;
border-top-right-radius: 4px;
font-family: 'Source Sans Pro', sans-serif;
margin-left: 16rem;
letter-spacing: 0.5px;
position: relative;
line-height: 1.4em;
font-size: 1.03em;
padding-left: 50px;
list-style: none;
text-align: left;
font-weight: 100;
max-width: 40%;

@media screen and (max-width: 768px){
margin: 0;
max-width: 100%;
}
`