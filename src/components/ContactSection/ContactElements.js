import styled  from 'styled-components';
import { BiChevronRight as Arrow } from 'react-icons/bi'

export const ContactContainer = styled.div`
 color: #fff;
 background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

 @media screen and (max-width: 768px){
   padding: 100px 0;
 }  
`

export const ContactWrapper = styled.div`
 display: grid;
 z-index:1;
 height: 860px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
//  pading 0 24px;
//  justify-content: center;
 @media screen and (max-width: 768px){
    height: auto;

  } 
`

export const ContactRow = styled.div`
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
 grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};

 @media screen and (max-width: 768px){
  grid-template-areas: ${({imgStart}) => (imgStart ? `"col2" "col1"` : `"col1 col1" "col2 col2"`)}
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
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1px;
  font-weight: 600px;
  color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px){
   font-size: 32px;
  }
 `
 export const Subtext = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
 `
 export const FormWrap = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;

 @media screen and (max-width: 400px){
  height: 80%;
  padding: 10px;
  
}
 `

export const Form = styled.form`
  max-width:  400px;
  height: auto;
  display: grid;
  margin: 0;
  padding: 24px;
`
export const FieldLabel = styled.label`
margin: 16px 0;
font-size: 16px;
font-weight: 600;
color: #010606;
`


export  const Field = styled.textarea`
padding: 10px 16px;
margin-bottom: 20px;
border: 2px solid #e3dede;

&:hover{
box-shadow: 1px 1px #888888;
} 
`
export const Select = styled.select`
padding: 10px 0;
font-weight: bold;
margin-bottom: 2rem;
border: 2px solid #e3dede;

`
export const Option = styled.option`

`


