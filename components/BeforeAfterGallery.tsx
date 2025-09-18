'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'

const beforeAfterImages = [
  {
    id: 1,
    title: 'Rejuvenescimento Facial',
    description: 'Tratamento completo para redução de rugas e manchas',
    category: 'Facial',
    image: '/images/antes-depois/facial-rejuvenescimento.jpg'
  },
  {
    id: 2,
    title: 'Harmonização Facial',
    description: 'Botox e preenchimento para harmonização dos traços',
    category: 'Harmonização',
    image: '/images/antes-depois/harmonizacao-facial.jpg'
  },
  {
    id: 3,
    title: 'Tratamento de Rugas na Testa',
    description: 'Botox para redução de linhas de expressão',
    category: 'Botox',
    image: '/images/antes-depois/botox-testa.jpg'
  }
]

export default function BeforeAfterGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
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
              Resultados Reais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja as transformações incríveis que nossos tratamentos proporcionam. 
            Cada resultado é único e personalizado para cada cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* Real before/after image */}
                  <img
                    src={item.image}
                    alt={`Antes e depois - ${item.title}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-sm font-medium mb-1">{item.category}</div>
                      <div className="text-xs opacity-90">Clique para ampliar</div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged view */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <FaTimes />
              </button>

              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={beforeAfterImages.find(img => img.id === selectedImage)?.image}
                  alt={`Antes e depois - ${beforeAfterImages.find(img => img.id === selectedImage)?.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {beforeAfterImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-600">
                  {beforeAfterImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quer resultados como esses?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende sua consulta e descubra qual tratamento é ideal para você.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511999999999?text=Olá! Vi os resultados no site e gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quero Minha Transformação
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}