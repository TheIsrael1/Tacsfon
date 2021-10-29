import React, {  useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import MediaSection from '../components/MediaSection'
import  Footer from '../components/Footer'

const Media = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
      setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <MediaSection />
        <Footer />
        
        </>
    )
}

export default Media