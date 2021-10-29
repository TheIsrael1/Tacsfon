import styled  from 'styled-components';
import { RiArrowRightSLine as Arrow } from 'react-icons/ri';

export const AboutContainer = styled.div`
 color: #fff;
 background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

 @media screen and (max-width: 768px){
   padding: 20px 0;
 }  
`

export const AboutWrapper = styled.div`
 display: grid;
 z-index:1;
 min-height: 700px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 pading 0 24px;
 justify-content: center;
//  align-items: space-between;
 @media screen and (max-width: 768px){
  height: auto;

  } 
`

export const AboutRow = styled.div`
 display: grid;
 padding-top : 5rem;
 justify-content: space-between;
 grid-auto-columns: minmax(auto, 1fr);
 grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};

 @media screen and (max-width: 768px){
  grid-template-areas: ${({imgStart}) => (imgStart ? `"col2" "col1"` : `"col1 col1" "col2 col2"`)}
 }
`
 export const Column1 = styled.div`
  margin-bottom: 5px;
  padding: 0 15px;
  grid-area: col1;
 `
  export const Column2 = styled.div`
  margin-bottom: 5px;
  padding: 0 15px;  
  grid-area: col2;
 `
 export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
 `

 export const TopLine = styled.p`
  color: #01bF71;
  font-size: 16px;
  Line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px'
  tex-transform: uppercase;
  margin-bottom: 16px;

 `

 export const Heading = styled.h1`
  margin: 3rem 0;
  font-size: 48px;
  line-height: 1.8rem;
  font-weight: 600px;
  color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px){
   font-size: 26px;
  }
 `
 export const Subtext = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  letter-spacing: .2px;
  line-height: 10px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
 `

 export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%; 
 `

 export const Img = styled.img`
  width:100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  `
  export const UList = styled.ul`
  text-decoration: none;
  list-style: none;
  width: 100%;
  min-height: 100vh;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 2rem;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
  `
  export const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  max-width: 70%;
  min-height: 2.3rem;
  padding-left: 1rem;
  // padding: 2rem 0;
  
    &:before { 
      content: '>'; 
      color: #01BF71;
      font-weight: 700;
      margin-left: -20px; 
      margin-right: 10px; 
    }
    @media screen and (max-width: 480px){
      max-width: 90%;
     }
  `
  



