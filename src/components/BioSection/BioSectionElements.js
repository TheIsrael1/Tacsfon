import styled from 'styled-components'


export const BioContainer = styled.div`
height: auto;
display: flex;
flex-direction: column;
justify-content: top;
align-items:center;
padding: 0 1rem 10rem;
background: #f9f9f9;

@media screen and (max-width: 768px){
    // height: 1300px;
}

@media scrren and (max-width: 400px ){
    // height: 1300px;
}
`

export const BioWrapper = styled.div`
max-width: 1200px;
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const BioH1 = styled.h1`
font-size: 2.5rem;
color: #010606;
padding-top: 3rem;
margin-bottom: 64px;

@media screen and (max-width: 480px){
font-size: 1.8rem;
}
`