// IMPORT SEMUA COMPONENT
import Header from './components/header'
import Navbar from './components/navbar'
import Gallery from './components/gallery'
import Footer from './components/footer'

// PAKAI CSS UNIVERSAL
import './App.css'

function App() {
  return (
    <>
    <section id='home'>
      <Header />
    </section>

    <Navbar />

    <section id='gallery'>
      <Gallery />
    </section>

    <Footer />
    </>
  )
}

export default App
