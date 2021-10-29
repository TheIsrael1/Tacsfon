import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HeroContainer = styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 800px;
 position: relative;
 z-index:1;

 :before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
   z-index: 2;
 }


 `
 export const HeroBg = styled.div`
  position: absolute;
  top:0;
  right:0;
  bottom: 0;
  left:0;
  width: 100%;
  height: 100%;
  overflow: hidden;
 `
 export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
 `

 export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: senter
 `

 export const HeroH1 = styled.h1`
 color: #fff;
 font-family: 'Prata', serif;;
 font-size: 68px;
 text-align: center;
 padding: 5px;
 border-color: #fff;  
  border-width: 2px;  
  border-style: solid;

 @media screen and (max-width: 768px){
  font-size: 46px;
 }

 @media screen and (max-width: 480px){
  font-size: 32px;
 }
 `

 export const HeroP = styled.p`
  margin-top: 30px;
  color: #fff;
  font-family: cursive;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
 
    @media screen and (max-width: 768px){
  font-size: 16px;
 }

 @media screen and (max-width: 480px){
  font-size: 16px;
 }
  `

  export const HeroBtnWrapper = styled.div`
   margin-top: 32px;
   display: flex;
   flex-directSion: row;
   align-items: center;
   justify-content: center;
  `

  export const ArrowForward = styled(MdArrowForward)`
   margin-left: 2px;
   font-size: 20px;
  `
  export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left: 2px;
   font-size: 20px;
  `
