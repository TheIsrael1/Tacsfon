import styled from 'styled-components';



export const Card = styled.a`
background: white;
text-decoration: none;
color: #444;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
min-height: 90%;
margin-bottom: 2rem;
position: relative;
top: 0;
transition: all .1s ease-in;

&:hover{
    top: -2px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
}
`

export const Poster = styled.div`
 padding-bottom: 60%;
 background-size: contain;
 background-repeat: no-repeat;
 background-position: center;
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
    font-size: 24px;
    margin: 0;
    color: #333;
`

export const Text = styled.p`
    flex: 1;
    line-height: 1.4;
`
export const Span = styled.span`
    font-size: 14px;
    fot-weight: bold;
    color: #999;
    text-transform: uppercase;
    lette-spacing: .05em;
    margin: 2em 0 0 0;
`


