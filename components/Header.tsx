'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="/images/logo/ChatGPT Image 18 de set. de 2025, 01_52_43.png"
              alt="Lumina Estética Avançada"
              className="h-28 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Diferenciais', id: 'diferenciais' },
              { name: 'Serviços', id: 'servicos' },
              { name: 'Blog', id: 'blog' },
              { name: 'Contato', id: 'contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:text-rose-600 font-semibold text-lg transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-rose-50"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5581991019999?text=Olá! Gostaria de mais informações sobre os tratamentos."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-lg" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/luminaesteticaboaviagem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaInstagram className="text-lg" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 hover:bg-rose-200 transition-colors duration-300 shadow-md"
            >
              {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-lg"
        >
          <div className="p-6 space-y-4">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Diferenciais', id: 'diferenciais' },
              { name: 'Serviços', id: 'servicos' },
              { name: 'Blog', id: 'blog' },
              { name: 'Contato', id: 'contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
              <a
                href="https://wa.me/5581991019999?text=Olá! Gostaria de mais informações sobre os tratamentos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-300"
              >
                <FaWhatsapp />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/luminaesteticaboaviagem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors duration-300"
              >
                <FaInstagram />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}