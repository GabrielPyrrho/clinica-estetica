'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <div className="font-bold text-xl bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  LUMINA
                </div>
                <div className="text-xs text-gray-400 -mt-1">ESTÉTICA AVANÇADA</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando vidas através da estética avançada. 
              Sua beleza natural realçada com segurança e excelência.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/lumina.estetica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Nossos Serviços</h3>
            <ul className="space-y-3">
              {[
                'Botox & Harmonização',
                'Preenchimento Facial',
                'Tratamentos Faciais',
                'Bioestimuladores',
                'Limpeza de Pele',
                'Rejuvenescimento'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#servicos"
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-rose-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Av. Boa Viagem, 123 - Boa Viagem</p>
                  <p>Recife, PE - CEP: 51020-000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-rose-400 flex-shrink-0" />
                <span className="text-gray-300">(81) 99999-9999</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-rose-400 flex-shrink-0" />
                <span className="text-gray-300">contato@luminaestetica.com.br</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaClock className="text-rose-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Seg - Sex: 9h às 18h</p>
                  <p>Sábado: 9h às 16h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Agende Agora</h3>
            <div className="space-y-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5581999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center"
              >
                Consulta Gratuita
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber sobre as promoções."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-3 px-4 rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 text-center"
              >
                Ver Promoções
              </motion.a>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-white">Receba Novidades</h4>
              <p className="text-gray-300 text-sm mb-4">
                Fique por dentro das promoções e novos tratamentos.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5511999999999?text=Olá! Gostaria de receber informações sobre promoções e novidades."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-700 text-white font-medium py-3 px-4 rounded-2xl hover:bg-gray-600 transition-all duration-300 text-center border border-gray-600"
              >
                Quero Receber
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Lumina Estética Avançada. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-rose-400" />
              </motion.div>
              <span>para sua beleza</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}