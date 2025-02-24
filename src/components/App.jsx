import { useState, useEffect } from 'react'
import About from './About/About'
import './App.css'
import Header from './Header/Header'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Services from './Services/Services'
import { getData } from '../api'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import MobMenu from './MobMenu/MobMenu'
import { AnimatePresence } from 'framer-motion'
import Modal from './Modal/Modal'

export default function App() {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleOpenModal = () => setShowModal(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData()
      setData(response)
    }
    fetchData()
  }, [])

   useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("no-scroll"); 
    } else {
      document.documentElement.classList.remove("no-scroll"); 
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!data.length) return null
  
    return (
        <>
        <Header setIsOpen={setIsOpen} />
        <AnimatePresence>
          {isOpen && <MobMenu setIsOpen={setIsOpen} isOpen={isOpen} />}
          </AnimatePresence>
        <Home />
        <About />
        <Services />
        <Projects data={data} />
        <Contact handleOpenModal={handleOpenModal} />
        <Footer />
        {showModal && <Modal handleCloseModal={handleCloseModal} />}
      </>
  )
}