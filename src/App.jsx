import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Cursor from "@/components/Cursor/Cursor";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import BackToTop from "@/components/BackToTop/BackToTop";


function App() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
      <BackToTop />
      
    </>
  );
}

export default App;