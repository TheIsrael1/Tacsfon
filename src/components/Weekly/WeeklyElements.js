import styled from 'styled-components'

export const WeeklyContainer = styled.div`
height: auto;
display: flex;
flex-direction: column;
justify-content: top;
align-items:center;
padding: 0 1rem 10rem;
background: #f9f9f9;

@media screen and (max-width: 768px){
    height: 1300px;
}

@media scrren and (max-width: 400px ){
    height: 1300px;
}
`

export const WeeklyWrapper = styled.div`
max-width: 1200px;
margin: 1rem auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const WeeklyCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 5px;
height: 350px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.3);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 1px 3px rgba(0,0,0,0.6);
    cursor: pointer; 
}

`

export const WeeklyIcon = styled.img`
height: 200px;
width: 100%;
margin-bottom: 10px;
`
export const WeeklyH1 = styled.h1`
font-size: 2.5rem;
color: #010606;
padding: 0 1rem;
margin-bottom: 64px;

@media screen and (max-width: 480px){
font-size: 1.8rem;
}
`

export const WeeklyH2 = styled.h2`
font-size: 1.5rem;
margin-bottom: 10px;
text-align: center;

@media screen and (max-width: 480px){
    font-size: 1rem;
}
`

export const WeeklyP = styled.p`
 font-size: 1rem;
 text-align: center;
`
