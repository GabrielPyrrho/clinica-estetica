'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaArrowRight } from 'react-icons/fa'

const servicos = [
  {
    id: 1,
    titulo: 'Botox & Harmonização Facial',
    descricao: 'Tratamento para rugas de expressão e harmonização dos traços faciais',
    preco: 'A partir de R$ 350',
    duracao: '30-45 min',
    resultados: 'Visíveis em 3-7 dias',
    beforeAfter: 'antes-depois-1.jpg',
    beneficios: ['Reduz rugas', 'Harmoniza traços', 'Resultado natural']
  },
  {
    id: 2,
    titulo: 'Preenchimento Facial',
    descricao: 'Restaura volume e define contornos faciais com ácido hialurônico',
    preco: 'A partir de R$ 450',
    duracao: '45-60 min',
    resultados: 'Imediatos',
    beforeAfter: 'antes-depois-2.jpg',
    beneficios: ['Restaura volume', 'Define contornos', 'Hidrata a pele']
  },
  {
    id: 3,
    titulo: 'Tratamentos Faciais Avançados',
    descricao: 'Protocolos personalizados para rejuvenescimento e cuidados da pele',
    preco: 'A partir de R$ 200',
    duracao: '60-90 min',
    resultados: 'Progressivos',
    beforeAfter: 'antes-depois-3.jpg',
    beneficios: ['Rejuvenesce', 'Uniformiza tom', 'Melhora textura']
  },
  {
    id: 4,
    titulo: 'Bioestimuladores de Colágeno',
    descricao: 'Estimula a produção natural de colágeno para firmeza e elasticidade',
    preco: 'A partir de R$ 600',
    duracao: '30-45 min',
    resultados: 'Progressivos (2-6 meses)',
    beforeAfter: 'antes-depois-4.jpg',
    beneficios: ['Estimula colágeno', 'Firma a pele', 'Efeito duradouro']
  }
]

export default function Servicos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
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
              Nossos Tratamentos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta e técnicas avançadas para realçar sua beleza natural 
            com segurança e resultados excepcionais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Before/After Image */}
              <div className="relative h-64 bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">Antes & Depois</span>
                </div>
                
                {/* Overlay with service info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                      <span className="text-white text-sm ml-2">Resultados comprovados</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                  {servico.titulo}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {servico.descricao}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Benefícios:</h4>
                  <div className="flex flex-wrap gap-2">
                    {servico.beneficios.map((beneficio, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium"
                      >
                        {beneficio}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="text-center">
                    <div className="text-lg font-bold text-rose-600">{servico.preco}</div>
                    <div className="text-xs text-gray-500">Preço</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-rose-600">{servico.duracao}</div>
                    <div className="text-xs text-gray-500">Duração</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-rose-600">{servico.resultados}</div>
                    <div className="text-xs text-gray-500">Resultados</div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ${servico.titulo}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Agendar Consulta
                  <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6">
              Oferecemos consultas personalizadas para criar o plano de tratamento ideal para você.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Consulta Personalizada
              <FaArrowRight className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}