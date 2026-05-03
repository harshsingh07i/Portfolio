import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f0f0f0] dark:bg-[#080808] font-sans selection:bg-[#5E6470] dark:selection:bg-white selection:text-white dark:selection:text-black transition-colors duration-500">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <Hero />
      </div>
      
      <div className="flex flex-col gap-12 pb-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;
