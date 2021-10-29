import React, {  useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AboutSection from '../components/AboutSection';
import BioSection from '../components/BioSection'
import  Footer from '../components/Footer'

const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
      setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <AboutSection />
        <BioSection />
        <Footer />
        
        </>
    )
}

export default About
