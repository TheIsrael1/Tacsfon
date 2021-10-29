import styled from 'styled-components';



export const Card = styled.a`
background: white;
text-decoration: none;
color: #444;
box-shadow: 0 2px 5px rgba(0,0,0,0.4);
display: flex;
flex-direction: column;
max-width: 20rem;
margin-bottom: 0.5rem;
min-height: 30rem;
position: relative;
// top: 0;
transition: all .1s ease-in;

&:hover{
    top: -2px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
}
`

export const Image = styled.div`
 width: 100%;
 padding-bottom: 90%;
 background-size: contain;
 background-repeat: no-repeat;
 background-position: center center;
 

`

export const Article = styled.article`
    padding: 20px;
    // flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
`

export const Header = styled.h1`
    font-size: 20px;
    font-weight: bold;
    display: inline;
    margin: 0;
    padding: 2px;
    background-color: #444;
    color: #fff;
    
`

export const Bio = styled.p`
    flex: 1;
    line-height: 1.4;
`
export const Span = styled.span`
    font-size: 10px;
    font-weight: 700;
    color: #999;
    text-transform: uppercase;
    lette-spacing: .05em;
    margin: 2em 0 0 0;
`
export  const Name = styled.p`
    font-size: 20px;
    font-weight: 700;
`

