import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Product from './components/Product'
import Solutions from './components/Solutions'
import Services from './components/Services'
import Corevalue from './components/Corevalue'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Product />
      <Corevalue />
      <Stats />
      <Solutions />
      <News />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App