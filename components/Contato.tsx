'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Contato() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/558199101999?text=${encodedMessage}`, '_blank')
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atendê-la e criar o plano de tratamento perfeito para você. 
            Agende sua consulta e dê o primeiro passo para sua transformação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* WhatsApp CTA */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWhatsapp className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Atendimento via WhatsApp
                </h3>
                <p className="text-gray-600">
                  Resposta rápida e atendimento personalizado
                </p>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de agendar uma consulta.')}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Agendar Consulta
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de saber mais sobre os tratamentos disponíveis.')}
                  className="w-full bg-white border-2 border-green-500 text-green-600 font-semibold py-4 px-6 rounded-2xl hover:bg-green-50 transition-all duration-300"
                >
                  Informações sobre Tratamentos
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de saber sobre preços e promoções.')}
                  className="w-full bg-white border-2 border-green-500 text-green-600 font-semibold py-4 px-6 rounded-2xl hover:bg-green-50 transition-all duration-300"
                >
                  Preços e Promoções
                </motion.button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Boa Viagem, 123 - Boa Viagem<br />
                      Recife, PE - CEP: 51020-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 16h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">(81) 99101-9999</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                    <p className="text-gray-600">Luminaestetica_ec@hotmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Siga-nos nas Redes Sociais</h3>
              
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/luminaesteticaboaviagem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-4 px-6 rounded-2xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <FaInstagram className="text-xl" />
                  <span>Instagram</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/558199101999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Map/Location */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Google Maps */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2847!2d-34.8973!3d-8.1137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f0b0b0b0b0b%3A0x0!2sAv.%20Boa%20Viagem%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                ></iframe>
                
                {/* Overlay com botão */}
                <div className="absolute bottom-4 right-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://maps.google.com/?q=Av.+Boa+Viagem,+123+-+Boa+Viagem,+Recife+-+PE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white shadow-lg px-4 py-2 rounded-full text-gray-700 hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2"
                  >
                    <FaMapMarkerAlt className="text-rose-500" />
                    <span className="text-sm font-medium">Ver no Maps</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ações Rápidas</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de agendar uma avaliação gratuita.')}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-4 rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Avaliação Gratuita
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de saber sobre as promoções do mês.')}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-4 px-4 rounded-2xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Promoções
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de saber sobre planos de tratamento.')}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-4 rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Planos
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de tirar algumas dúvidas sobre os tratamentos.')}
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-4 px-4 rounded-2xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Tire Dúvidas
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}