import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900" >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 
        py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar/>
        <section id="home">
           <Hero/>
          </section>
         
          <section id="about">
            {<About/>}
          </section>
          <section id="technologies">
              { <Technologies/>}
          </section>

          <section id="projects">
            {  <Projects/>}
          </section>
          <section id="blogs">
            { <Blog/> }
          </section>

          <section id="contact">
            { <Contact/>}
          </section>
        
       
        
      </div>
     
    </div>
  )
}