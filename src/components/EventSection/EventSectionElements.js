import styled, {keyframes} from 'styled-components'

const scrollUp = keyframes`
from{
  -webkit-transform: translateY(0);
    transform: translateY(0);
}
to{
  -webkit-transform: translateY(-80%);
  transform: translateY(-80%);
}
`

export const Container = styled.div`
color: #fff;
background: #f9f9f9;
// ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}
margin-top: 80px;
padding: 2rem 0;
@media screen and (max-width: 768px){
// padding: 100px 0;
}  
`

export const Wrapper = styled.div`
display: grid;
z-index:1;
height: auto;
width: 99%;
margin: 0 auto;
// justify-content: center;
// align-items: center;
@media screen and (max-width: 768px){
   height: auto;
 } 
`

export const Row =  styled.div`
 display: grid;
 width: 100%;
 grid-auto-columns: minmax(3fr, 1fr);
 grid-template-areas: "col1 col2";
 grid-gap: 2rem;

 @media screen and (max-width: 1100px){
  grid-template-areas: "col1";

 }
`

export const Column1 = styled.div`
display: grid;
  align-items: center;
  // padding: 0 15px;
  grid-area: col1;
 `
  export const Column2 = styled.div`
  color: #000;
  // margin-bottom: 15px;
  // padding: 0 15px;  
  grid-area: col2;
  @media screen and (max-width: 1100px){
   display: none;
   }
 `
 export const Animation = styled.div`
 font-size: 4rem;
 font-weight: 700;
 height: 100px;
 margin-top: 10rem;
 overflow: hidden;
 position: relative;

 &:before{
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  content: '';
  height: 10px;
  position: absolute;
  background: linear-gradient(180deg, rgba(249, 249, 249, 0));
 }

 &:after{
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  content: '';
  height: 20px;
  position: absolute;
  background: linear-gradient(180deg, rgba(249, 249, 249, 0)); 
 }
 `
export const List = styled.ul`
text-align: center;
line-height: 1rem;
float: right;
margin: 0;
padding: 0;
-webkit-animation: ${scrollUp} 4s ease-in-out infinite normal;
 animation: ${scrollUp} 4s ease-in-out infinite normal;
`
export const ListItem = styled.li`
font-size: 5rem;
color: #333;
opacity: 1;
height: 60px;
padding: 80px 0px;
list-style: none;
`


