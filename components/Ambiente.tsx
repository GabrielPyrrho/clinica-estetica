'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Ambiente() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const ambienteImages = [
    { 
      src: '/images/clinica/ambiente 2.jpg', 
      alt: 'Ambiente da clínica',
      badge: 'Ambiente Moderno',
      description: 'Espaço clean e acolhedor'
    },
    { 
      src: '/images/clinica/ambiente 4.jpg', 
      alt: 'Sala de atendimento',
      badge: 'Sala de Procedimentos',
      description: 'Equipamentos de última geração'
    },
    { 
      src: '/images/clinica/atendimento 3.jpg', 
      alt: 'Processo de atendimento',
      badge: 'Atendimento',
      description: 'Cuidado profissional e humanizado'
    },
    { 
      src: '/images/equipe/atendimento 4.jpg', 
      alt: 'Atendimento personalizado',
      badge: 'Consulta',
      description: 'Avaliação personalizada'
    },
    { 
      src: '/images/equipe/Produtos.jpg', 
      alt: 'Produtos utilizados',
      badge: 'Produtos Premium',
      description: 'Marcas reconhecidas mundialmente'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Nosso Ambiente
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nosso espaço moderno e acolhedor, projetado para proporcionar 
            conforto e tranquilidade durante seus tratamentos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambienteImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-semibold rounded-full shadow-md">
                  {image.badge}
                </span>
              </div>
              
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay com informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{image.badge}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quer conhecer nosso espaço pessoalmente?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende uma visita e conheça nossa estrutura moderna e acolhedora.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5581991019999?text=Olá! Gostaria de agendar uma visita para conhecer a clínica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Agendar Visita
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}