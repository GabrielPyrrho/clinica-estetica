'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'

const beforeAfterImages = [
  {
    id: 1,
    title: 'Preenchimento Labial',
    description: 'Aumento e definição dos lábios com ácido hialurônico',
    category: 'Preenchimento',
    image: '/images/antes-depois/preenchimento_labial.JPG',
    details: {
      procedimento: 'Ácido Hialurônico',
      duracao: '30 minutos',
      resultados: 'Imediatos',
      manutencao: 'A cada 8-12 meses',
      beneficios: ['Aumenta volume', 'Define contorno', 'Hidrata os lábios', 'Resultado natural']
    }
  },
  {
    id: 2,
    title: 'Harmonização Facial',
    description: 'Botox e preenchimento para harmonização dos traços',
    category: 'Harmonização',
    image: '/images/antes-depois/harmonizacao_facil.jpg',
    details: {
      procedimento: 'Botox + Preenchimento labial',
      duracao: '45 minutos',
      resultados: 'Imediatos',
      manutencao: 'Botox: 4-6 meses | Preenchimento: 8-12 meses',
      beneficios: ['Suaviza expressões', 'Define contornos', 'Equilibra proporções', 'Resultado natural']
    }
  },
  {
    id: 3,
    title: 'Tratamento de Rugas na Testa',
    description: 'Botox para redução de linhas de expressão',
    category: 'Botox',
    image: '/images/antes-depois/resultado 3.jpg',
    details: {
      procedimento: 'Toxina Botulínica',
      duracao: '20 minutos',
      resultados: '3-7 dias',
      manutencao: 'A cada 4-6 meses',
      beneficios: ['Elimina rugas dinâmicas', 'Previne novas rugas', 'Efeito lifting', 'Procedimento rápido']
    }
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
                    className="absolute inset-0 w-full h-full object-cover object-center"
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
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden max-h-[80vh] overflow-y-auto"
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
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={beforeAfterImages.find(img => img.id === selectedImage)?.image}
                  alt={`Antes e depois - ${beforeAfterImages.find(img => img.id === selectedImage)?.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                {(() => {
                  const selectedImg = beforeAfterImages.find(img => img.id === selectedImage)
                  return selectedImg ? (
                    <>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-sm font-medium rounded-full">
                          {selectedImg.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {selectedImg.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {selectedImg.description}
                      </p>
                      
                      {/* Details Grid */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Procedimento</h4>
                            <p className="text-gray-600 text-sm">{selectedImg.details.procedimento}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Duração</h4>
                            <p className="text-gray-600 text-sm">{selectedImg.details.duracao}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Resultados</h4>
                            <p className="text-gray-600 text-sm">{selectedImg.details.resultados}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1">Manutenção</h4>
                            <p className="text-gray-600 text-sm">{selectedImg.details.manutencao}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Benefícios</h4>
                          <ul className="space-y-2">
                            {selectedImg.details.beneficios.map((beneficio, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                                <span>{beneficio}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="border-t pt-6">
                        <a
                          href="https://wa.me/5581991019999?text=Olá! Vi o resultado de ${selectedImg.title} no site e gostaria de agendar uma consulta."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 inline-block text-center"
                        >
                          Quero Este Resultado
                        </a>
                      </div>
                    </>
                  ) : null
                })()}
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
              href="https://wa.me/5581991019999?text=Olá! Vi os resultados no site e gostaria de agendar uma consulta."
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