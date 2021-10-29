import React, {  useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import  Footer from '../components/Footer'
import  EventSection from '../components/EventSection'
const Events = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
      setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <EventSection />
        <Footer />
        
        </>
    )
}

export default Events