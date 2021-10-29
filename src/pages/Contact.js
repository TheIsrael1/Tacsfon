import React, {  useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import  ContactSection from '../components/ContactSection'
import  Footer from '../components/Footer'

const Contact = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
      setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <ContactSection />
        <Footer />
        
        </>
    )
}

export default Contact