'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaAward, FaUserMd, FaShieldAlt, FaHeart, FaCertificate, FaGem } from 'react-icons/fa'

const diferenciais = [
  {
    icon: FaUserMd,
    titulo: 'Profissionais Especializados',
    descricao: 'Equipe altamente qualificada com certificações internacionais e anos de experiência.',
    cor: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaGem,
    titulo: 'Tecnologia de Ponta',
    descricao: 'Equipamentos de última geração e produtos premium para resultados superiores.',
    cor: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaShieldAlt,
    titulo: 'Segurança Garantida',
    descricao: 'Protocolos rigorosos de segurança e higiene seguindo padrões internacionais.',
    cor: 'from-green-500 to-green-600'
  },
  {
    icon: FaHeart,
    titulo: 'Atendimento Humanizado',
    descricao: 'Cuidado personalizado com foco no bem-estar e conforto de cada cliente.',
    cor: 'from-rose-500 to-pink-600'
  },
  {
    icon: FaCertificate,
    titulo: 'Resultados Comprovados',
    descricao: 'Milhares de clientes satisfeitos com transformações reais e duradouras.',
    cor: 'from-amber-500 to-orange-600'
  },
  {
    icon: FaAward,
    titulo: 'Excelência Reconhecida',
    descricao: 'Premiações e reconhecimentos no setor de estética e beleza.',
    cor: 'from-indigo-500 to-purple-600'
  }
]

export default function Diferenciais() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="diferenciais" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-100 to-purple-100"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Lumina?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa missão é proporcionar uma experiência única em estética, 
            combinando expertise, tecnologia e cuidado personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.cor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    
                    {/* Floating decoration */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${item.cor} rounded-full opacity-20`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                    {item.titulo}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.descricao}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            )
          })}
        </div>



        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
                >
                  <FaAward className="text-2xl text-yellow-400 mx-1" />
                </motion.div>
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "A Lumina transformou não apenas minha aparência, mas minha autoestima. 
              O atendimento é excepcional e os resultados superaram todas as minhas expectativas."
            </blockquote>
            
            <div className="text-rose-600 font-semibold">
              Maria Silva - Cliente
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}