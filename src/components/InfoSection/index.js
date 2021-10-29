import React from 'react';
import {Button} from '../ButtonElements';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtext, 
    BtnWrap, 
    ImgWrap, 
    Img
    
} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description,
buttonLabel, img, alt, primary, dark, dark2,}) => {
 return (
  <>
   <InfoContainer lightBg={lightBg} id={id}>
  <InfoWrapper>
   <InfoRow imgStart={false}>
    <Column1>
     <TextWrapper>
      <Heading lightText={lightText}>{headline}</Heading>
      <TopLine>{topLine}</TopLine>
      <Subtext darkText={darkText}>{description}</Subtext>
      <BtnWrap>
       <Button to='/about'
        smooth={true}
        duration={500}
        spy={true}
        exact={true}
        offset={-80}
        primary={primary? 1:0}
        dark={dark ? 1: 0}
        dark2={dark2 ? 1:0}
       >{buttonLabel}</Button>
      </BtnWrap>
     </TextWrapper>
    </Column1>
    <Column2>
    <ImgWrap>
    <Img src={img} alt={alt}/>
    </ImgWrap>
    </Column2>
   </InfoRow>
  </InfoWrapper>
   </InfoContainer>
  </>
 )
}

export default InfoSection;