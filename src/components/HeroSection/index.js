import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import { Button } from './../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {

 const [hover, setHover] = useState(false)

 const onHover = ()=> {
  setHover(!hover)
 }
 const [hover2, setHover2] = useState(false)

 const onHover2 = ()=> {
  setHover2(!hover2)
 }

 return (
  <HeroContainer id="home">
   <HeroBg>
     <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
   </HeroBg>
   <HeroContent>
    <HeroH1>We are Tacsfon UI</HeroH1>
    <HeroP>
    Let no man despise your youth 1Tim 4:12
    </HeroP>
    <HeroBtnWrapper>
     <Button smooth={true} duration={500} spy={true} exact='true' offset={-80} to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
     primary="true"
     dark="true"
     >
     Get Started {hover ? <ArrowForward /> : <ArrowRight />}
     </Button>
     <Button smooth={true} duration={500} spy={true} exact='true' offset={-80} to="signup" onMouseEnter={onHover2} onMouseLeave={onHover2}
     primary="true"
     dark="true"
     >
     Watch Live {hover2 ? <ArrowForward /> : <ArrowRight />}
     </Button>
    </HeroBtnWrapper>
    
   </HeroContent>
  </HeroContainer>
 )
}

export default HeroSection
