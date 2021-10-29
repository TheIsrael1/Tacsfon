import React, {  useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import  GallerySection from '../components/GallerySection'
import  Footer from '../components/Footer'

const Gallery = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
      setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <GallerySection />
        <Footer />
        
        </>
    )
}

export default Gallery