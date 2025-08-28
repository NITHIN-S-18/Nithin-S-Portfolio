import Hero from "./sections/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import About from "./sections/About.jsx"
import TeckStack from "./sections/TeckStack.jsx"
import Experience from "./sections/Experience.jsx"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <TeckStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    
    </>
  )
}

export default App