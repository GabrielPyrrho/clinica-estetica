import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Diferenciais from '@/components/Diferenciais'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import Equipe from '@/components/Equipe'
import Servicos from '@/components/Servicos'
import Blog from '@/components/Blog'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="diferenciais">
        <Diferenciais />
      </div>
      <BeforeAfterGallery />
      <Equipe />
      <div id="servicos">
        <Servicos />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contato">
        <Contato />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}