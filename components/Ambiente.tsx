'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Ambiente() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const ambienteImages = [
    { src: '/images/clinica/ambiente 2.jpg', alt: 'Ambiente da clínica' },
    { src: '/images/clinica/ambiente 4.jpg', alt: 'Sala de atendimento' },
    { src: '/images/clinica/atendimento 3.jpg', alt: 'Processo de atendimento' },
    { src: '/images/equipe/atendimento 4.jpg', alt: 'Atendimento personalizado' },
    { src: '/images/equipe/Produtos.jpg', alt: 'Produtos utilizados' }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ambienteImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}