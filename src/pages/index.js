import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from './../components/HeroSection/index';
import InfoSection from './../components/InfoSection/index';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Weekly from '../components/Weekly';
import Upcoming from '../components/Upcoming';
import Message from '../components/MessageSection'
import Footer from '../components/Footer/index';

const Home = () => {

   const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

 return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Navbar toggle={toggle}/>
  <HeroSection />
  <InfoSection {...homeObjTwo}/>
  <Weekly />
  <Upcoming />
  <Message />
  <Footer />
  </>
 )
 
}

export default Home
