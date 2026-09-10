import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EngineeringSnapshot from './components/EngineeringSnapshot'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import FormulaStudent from './components/FormulaStudent'
import Projects from './components/Projects'
import Skills from './components/Skills'
import EngineeringProcess from './components/EngineeringProcess'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EngineeringSnapshot />
        <About />
        <FeaturedProject />
        <FormulaStudent />
        <Projects />
        <Skills />
        <EngineeringProcess />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
