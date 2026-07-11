// IMPORT SEMUA COMPONENT
import Header from './components/header'
import Navbar from './components/navbar'
import Gallery from './components/gallery'
import Service from './components/service'
import About from './components/about'
import Footer from './components/footer'

import { useEffect } from 'react';

// PAKAI CSS UNIVERSAL
import './App.css'
import Faq from './components/faq'

function App() {
  useEffect(() => {

    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <section id='home'>
      <Header />
    </section>

    <Navbar />

    <section id='gallery'>
      <Gallery />
    </section>

    <section id='service'>
      <Service />
    </section>

    <section id='faq'>
      <Faq/>
    </section>

    <section id='about'>
      <About />
    </section>

    <Footer />
    </>
  )
}

export default App
