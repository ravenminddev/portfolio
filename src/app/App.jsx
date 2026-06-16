import Hero from "../components/home/Hero"
import NavBar from "../components/navigationBar/NavBar"
import AboutUs from "../components/aboutUs/AboutUs"
import Services from "../components/services/Services"
import Contact from "../components/contact/Contact"
import ContactButton from "../components/contactButton/ContactButton"
import Experience from "../components/experience/Experience"
import Footer from "../components/footer/Footer.jsx"

function App() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Services/>
      <Experience/>
      <AboutUs/>
      <Contact/>
      <ContactButton/>
      <Footer/>
    </div>
  )
}

export default App
