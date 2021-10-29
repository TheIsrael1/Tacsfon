import styled from 'styled-components'

export const MediaContainer = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: top;
align-items:center;
padding-top: 6rem; 
background: #f9f9f9;

@media screen and (max-width: 768px){
    min-height: 1300px;
}

@media scrren and (max-width: 400px ){
    min-height: 1300px;
}
`

export const MediaWrapper = styled.div`
max-width: 1200px;
// margin: 1rem auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 10px;
`
export const MediaH1 = styled.h1`
margin: 0 auto;
font-size: 1.8rem;
color: #010606;
padding: 0 2rem;
// border: 1px solid #000;
box-shadow: 5px 5px 7px #aaaaaa;
margin-bottom: 3rem;

@media screen and (max-width: 480px){
font-size: 1.5rem;
}
`