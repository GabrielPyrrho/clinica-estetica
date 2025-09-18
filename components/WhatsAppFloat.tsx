'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const quickMessages = [
    {
      text: 'Agendar Consulta',
      message: 'Olá! Gostaria de agendar uma consulta na Lumina Estética.'
    },
    {
      text: 'Informações sobre Tratamentos',
      message: 'Olá! Gostaria de saber mais sobre os tratamentos disponíveis.'
    },
    {
      text: 'Preços e Promoções',
      message: 'Olá! Gostaria de saber sobre preços e promoções atuais.'
    },
    {
      text: 'Tirar Dúvidas',
      message: 'Olá! Tenho algumas dúvidas sobre os procedimentos estéticos.'
    }
  ]

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/558199101999?text=${encodedMessage}`, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Messages Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="mb-4 space-y-2"
        >
          {quickMessages.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleWhatsAppClick(item.message)}
              className="block w-full max-w-xs bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-200 hover:border-green-300 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                <span className="font-medium text-sm">{item.text}</span>
              </div>
            </motion.button>
          ))}
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-green-500 text-white px-4 py-3 rounded-2xl shadow-lg text-center"
          >
            <div className="font-semibold text-sm">💬 Como podemos ajudar?</div>
            <div className="text-xs opacity-90 mt-1">Escolha uma opção abaixo</div>
          </motion.div>
        </motion.div>
      )}

      {/* Main WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaWhatsapp className="text-2xl text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Pulse Animation */}
      {!isOpen && (
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-green-500 rounded-full -z-10"
        />
      )}

      {/* Notification Badge */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
        >
          1
        </motion.div>
      )}
    </div>
  )
}