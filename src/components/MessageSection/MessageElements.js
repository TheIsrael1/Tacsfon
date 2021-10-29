import styled from 'styled-components'

export const MessageContainer = styled.div`
 color: #000;
 background: #f9f9f9;

 @media screen and (max-width: 768px){
   padding: 100px 0;
 }  
`

export const MessageWrapper = styled.div`
 display: grid;
 z-index:1;
 height: 860px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 pading 0 24px;
 justify-content: center;
 @media screen and (max-width: 768px){
    height: auto;
  } 
`

export const MessageRow = styled.div`
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
 grid-gap: 5rem;
 grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};

 @media screen and (max-width: 768px){
  grid-template-areas: ${({imgStart}) => (imgStart ? `"col2" "col1"` : `"col2 col2" "col1 col1"`)}
 }
`
 export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
 `
  export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;  
  grid-area: col2;
  line-height: 1.5rem;
 `
 export const ImgWrap = styled.div`
  max-width: 700px;
  height: 100%; 
 `

 export const Img = styled.img`
  width:100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  `

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  padding-bottom: 2rem;
  @media screen and (max-width: 768px){
  font-size: 1.5rem;
  line-height: 1.8rem;
  }
`
export const Text = styled.p`
font-size: 18px;

`
export const Name = styled.span`
font-size: 18px;
font-weight: 600;

`

