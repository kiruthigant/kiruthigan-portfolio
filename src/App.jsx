import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ComputerVision from './pages/projects/ComputerVision';
import EcommercePipeline from './pages/projects/EcommercePipeline';
import AIFastAPI from './pages/projects/AIFastAPI';
import CVAnalyzer from './pages/projects/CVAnalyzer';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/computer-vision" element={<ComputerVision />} />
            <Route path="projects/ecommerce-pipeline" element={<EcommercePipeline />} />
            <Route path="projects/ai-fastapi" element={<AIFastAPI />} />
            <Route path="projects/cv-analyzer" element={<CVAnalyzer />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
