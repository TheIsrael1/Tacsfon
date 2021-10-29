import styled from 'styled-components'

export const H1 = styled.h1`
font-family: 'Oswald', sans-serif;
letter-spacing: 1.5px;
font-weight: 100;
font-size: 1.3em;
`
export const Event = styled.li`
color: #000;
border-bottom: 1px dashed rgba(0,0,0,0.1);
padding-bottom: 25px;
margin-bottom: 50px;
position: relative;
width: 100%;

 &:last-of-type { 
  padding-bottom: 0;
  margin-bottom: 0; 
  border: none;      
}

  &:before{
  position: absolute;
  display: block;
  top: 0;
}

  &:after{
  position: absolute;
  display: block;
  top: 0;
}

  &:before {
    left: -217.5px;
    color: grey;
    content: attr(data-date);
    text-align: right;
    font-weight: 100;
    font-size: 0.7em;
    min-width: 120px;

    @media screen and (max-width: 768px){
      font-size: 0.8em;
      left: -48px;
      top: -20px;
      // transform: rotate(-40deg);
    }
}

  &:after {
    box-shadow: 0 0 0 4px #01BF71;
    left: -57.85px;
    background: #f9f9f9;
    border-radius: 50%;
    height: 11px;
    width: 11px;
    content: "";
    top: 5px;
}
`