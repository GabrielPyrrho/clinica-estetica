'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FaCalendar, FaUser, FaArrowRight, FaTimes } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: 'Cuidados Pós-Botox: O que Você Precisa Saber',
    excerpt: 'Descubra os cuidados essenciais após aplicação de botox para garantir os melhores resultados.',
    date: '15 Nov 2024',
    author: 'Dra. Eduarda Chaves',
    category: 'Dicas',
    content: `
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">Cuidados Imediatos (Primeiras 4 horas)</h3>
      <ul style="margin-bottom: 20px; padding-left: 20px;">
        <li>Não deite ou abaixe a cabeça</li>
        <li>Evite tocar ou massagear a área</li>
        <li>Não pratique exercícios físicos</li>
        <li>Mantenha-se em pé ou sentada</li>
      </ul>
      
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">Primeiros 3 dias</h3>
      <ul style="margin-bottom: 20px; padding-left: 20px;">
        <li>Evite calor excessivo (sauna, sol direto)</li>
        <li>Não faça massagens faciais</li>
        <li>Durma de barriga para cima</li>
        <li>Use protetor solar</li>
      </ul>
      
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">Resultados</h3>
      <p>Os efeitos começam a aparecer entre 3-7 dias e o resultado final em 15 dias. Duração média de 4-6 meses.</p>
    `
  },
  {
    id: 2,
    title: 'Harmonização Facial: Mitos e Verdades',
    excerpt: 'Esclareça suas dúvidas sobre harmonização facial e entenda como funciona o procedimento.',
    date: '10 Nov 2024',
    author: 'Dra. Eduarda Chaves',
    category: 'Procedimentos',
    content: `
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">O que é Harmonização Facial?</h3>
      <p style="margin-bottom: 20px;">Conjunto de procedimentos estéticos que visam equilibrar e realçar os traços faciais, respeitando a anatomia e características individuais.</p>
      
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">Principais Procedimentos</h3>
      <ul style="margin-bottom: 20px; padding-left: 20px;">
        <li><strong>Botox:</strong> Reduz rugas dinâmicas</li>
        <li><strong>Preenchimento:</strong> Restaura volume e define contornos</li>
        <li><strong>Bioestimuladores:</strong> Estimula produção de colágeno</li>
        <li><strong>Fios de PDO:</strong> Lifting não cirúrgico</li>
      </ul>
      
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">Mitos e Verdades</h3>
      <p style="margin-bottom: 10px;"><strong>MITO:</strong> Deixa o rosto artificial<br>
      <strong>VERDADE:</strong> Quando bem executada, realça a beleza natural</p>
      
      <p><strong>MITO:</strong> É só para pessoas mais velhas<br>
      <strong>VERDADE:</strong> Pode ser preventiva desde os 25 anos</p>
    `
  },
  {
    id: 3,
    title: 'Skincare: Rotina Essencial para Pele Saudável',
    excerpt: 'Monte sua rotina de cuidados diários para manter a pele sempre jovem e radiante.',
    date: '05 Nov 2024',
    author: 'Dra. Eduarda Chaves',
    category: 'Cuidados',
    content: `
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">Rotina Matinal</h3>
      <ol style="margin-bottom: 20px; padding-left: 20px;">
        <li><strong>Limpeza:</strong> Sabonete adequado ao seu tipo de pele</li>
        <li><strong>Tônico:</strong> Equilibra o pH da pele</li>
        <li><strong>Vitamina C:</strong> Antioxidante e clareador</li>
        <li><strong>Hidratante:</strong> Mantém a barreira cutânea</li>
        <li><strong>Protetor Solar:</strong> FPS mínimo 30, reaplicar a cada 2h</li>
      </ol>
      
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">Rotina Noturna</h3>
      <ol style="margin-bottom: 20px; padding-left: 20px;">
        <li><strong>Demaquilante:</strong> Remove maquiagem e impurezas</li>
        <li><strong>Limpeza:</strong> Sabonete facial</li>
        <li><strong>Ativo:</strong> Ácido retinóico, glicólico ou salicílico</li>
        <li><strong>Hidratante noturno:</strong> Mais nutritivo</li>
      </ol>
      
      <h3 style="color: #e11d48; font-size: 1.2em; margin-bottom: 10px;">Cuidados Semanais</h3>
      <ul style="padding-left: 20px;">
        <li>Esfoliação: 1-2x por semana</li>
        <li>Máscara hidratante: 2x por semana</li>
        <li>Máscara de argila: 1x por semana (peles oleosas)</li>
      </ul>
    `
  }
]

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

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
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden">
                <img
                  src={post.id === 1 ? '/images/antes-depois/resultado.jpg' : 
                       post.id === 2 ? '/images/equipe/atendimento.jpg' : 
                       '/images/equipe/Produtos.jpg'}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
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
                  onClick={() => setSelectedPost(post.id)}
                  className="group/btn w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-3 px-4 rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
                >
                  <span>Ler Mais</span>
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <FaTimes />
              </button>

              {/* Header Image */}
              <div className="h-64 bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden">
                <img
                  src={selectedPost === 1 ? '/images/antes-depois/resultado.jpg' : 
                       selectedPost === 2 ? '/images/equipe/atendimento.jpg' : 
                       '/images/equipe/Produtos.jpg'}
                  alt={blogPosts.find(post => post.id === selectedPost)?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                {blogPosts.find(post => post.id === selectedPost) && (
                  <>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-sm font-medium rounded-full mb-4">
                        {blogPosts.find(post => post.id === selectedPost)?.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {blogPosts.find(post => post.id === selectedPost)?.title}
                    </h2>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <FaCalendar />
                        <span>{blogPosts.find(post => post.id === selectedPost)?.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaUser />
                        <span>{blogPosts.find(post => post.id === selectedPost)?.author}</span>
                      </div>
                    </div>
                    
                    <div 
                      className="prose max-w-none text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: blogPosts.find(post => post.id === selectedPost)?.content || '' 
                      }}
                    />
                  </>
                )}
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
              href="https://www.instagram.com/luminaesteticaboaviagem"
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