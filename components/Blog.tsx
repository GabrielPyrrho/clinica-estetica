'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: 'Cuidados Pós-Botox: O que Você Precisa Saber',
    excerpt: 'Descubra os cuidados essenciais após aplicação de botox para garantir os melhores resultados.',
    date: '15 Nov 2024',
    author: 'Dra. Eduarda Chaves',
    category: 'Dicas'
  },
  {
    id: 2,
    title: 'Harmonização Facial: Mitos e Verdades',
    excerpt: 'Esclareça suas dúvidas sobre harmonização facial e entenda como funciona o procedimento.',
    date: '10 Nov 2024',
    author: 'Dra. Eduarda Chaves',
    category: 'Procedimentos'
  },
  {
    id: 3,
    title: 'Skincare: Rotina Essencial para Pele Saudável',
    excerpt: 'Monte sua rotina de cuidados diários para manter a pele sempre jovem e radiante.',
    date: '05 Nov 2024',
    author: 'Dra. Eduarda Chaves',
    category: 'Cuidados'
  }
]

export default function Blog() {
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
              Dicas e Conteúdos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das últimas novidades em estética e aprenda como cuidar melhor da sua pele.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Imagem do Post</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-sm font-medium rounded-full mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaCalendar className="text-xs" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUser className="text-xs" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-3 px-4 rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
                >
                  <span>Ler Mais</span>
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quer receber mais dicas?
            </h3>
            <p className="text-gray-600 mb-6">
              Siga nosso Instagram para conteúdos exclusivos sobre estética e cuidados com a pele.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/lumina.estetica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Seguir no Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}