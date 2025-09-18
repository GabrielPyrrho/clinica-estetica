'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaCertificate, FaGraduationCap } from 'react-icons/fa'

export default function Equipe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-white">
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
              Nossa Equipe
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais altamente qualificados e certificados, dedicados a proporcionar 
            os melhores resultados com segurança e excelência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/equipe/certificado .jpg"
                alt="Dra. Eduarda Chaves - Equipe Lumina Estética"
                className="w-full h-[530px] object-cover object-[center_30%]"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="flex items-center space-x-2">
                <FaAward className="text-2xl text-yellow-500" />
                <div>
                  <div className="font-bold text-gray-800">Certificada</div>
                  <div className="text-sm text-gray-600">Profissional</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Dra. Eduarda Chaves
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Biomédica Esteta com Pós-graduação em Estética Avançada. 
                Especialista em harmonização facial e procedimentos estéticos de alta qualidade.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Biomédica Esteta</div>
                  <div className="text-gray-600">Pós-graduação em Estética Avançada</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <FaCertificate className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Certificações Internacionais</div>
                  <div className="text-gray-600">Técnicas avançadas em procedimentos estéticos</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FaAward className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Atualização Constante</div>
                  <div className="text-gray-600">Participação em congressos e cursos especializados</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">10+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">5000+</div>
                <div className="text-sm text-gray-600">Procedimentos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Treatment Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Nosso Processo de Atendimento
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Process Image */}
              <div className="relative">
                <img
                  src="/images/equipe/atendimento.jpg"
                  alt="Processo de atendimento - Dra. Eduarda"
                  className="w-full h-72 object-cover object-[center_20%] rounded-2xl"
                />
              </div>

              {/* Process Steps */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Consulta Inicial</h4>
                    <p className="text-gray-600 text-sm">Avaliação completa e discussão dos objetivos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Plano Personalizado</h4>
                    <p className="text-gray-600 text-sm">Criação de protocolo específico para você</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Procedimento</h4>
                    <p className="text-gray-600 text-sm">Execução com técnicas avançadas e seguras</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Acompanhamento</h4>
                    <p className="text-gray-600 text-sm">Suporte pós-procedimento e orientações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}