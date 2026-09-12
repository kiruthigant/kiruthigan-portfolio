import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { personalProjects } from "../../data/projects";
import AnimatedBackground from "../../components/AnimatedBackground";

export default function ComputerVision() {
  const project = personalProjects.find(p => p.id === "computer-vision");

  return (
    <div className="w-full relative min-h-screen pb-24">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/projects" className="inline-flex items-center gap-2 text-portfolio-text-muted hover:text-portfolio-accent mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="mb-12">
            <span className="font-mono text-portfolio-accent text-sm tracking-widest uppercase mb-4 block">Case Study // {project.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-portfolio-text-muted text-xl leading-relaxed">{project.shortDescription}</p>
          </div>

          {/* Architecture Visualization Mockup */}
          <div className="glass-panel w-full aspect-video md:aspect-[21/9] rounded-lg mb-16 flex items-center justify-center border border-portfolio-accent/30 bg-portfolio-surface overflow-hidden relative group">
            {/* CV Visual Elements */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-portfolio-accent/20 transition-colors duration-1000"></div>
            <div className="absolute top-[20%] left-[20%] w-[100px] h-[100px] border border-green-500/50 bg-green-500/10 hidden md:block">
              <span className="absolute -top-6 left-0 bg-green-500/80 text-white text-[10px] px-1 font-mono">Person 0.98</span>
            </div>
            <div className="absolute top-[50%] right-[30%] w-[120px] h-[80px] border border-portfolio-accent/50 bg-portfolio-accent/10">
              <span className="absolute -top-6 left-0 bg-portfolio-accent/80 text-white text-[10px] px-1 font-mono">Box 0.95</span>
            </div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-500/50 flex items-center justify-center">
              <span className="bg-portfolio-surface text-red-400 text-xs px-2 py-1 font-mono rounded-sm border border-red-500/30 whitespace-nowrap -ml-[45px]">Virtual Line</span>
            </div>
            <div className="text-center relative z-10 p-6 glass-panel backdrop-blur-md hidden sm:block">
              <p className="text-white font-mono text-sm">Computer Vision Visualization Concept</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-portfolio-accent font-mono text-lg">01.</span> Overview
                </h2>
                <p className="text-portfolio-text-muted leading-relaxed">
                  {project.problem} {project.solution}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-portfolio-accent font-mono text-lg">02.</span> Pipeline Architecture
                </h2>
                <div className="glass-panel p-6 rounded-md bg-portfolio-bg">
                  <code className="text-portfolio-text-muted text-sm whitespace-pre-wrap font-mono">
                    {project.architecture.split(" -> ").join("\n↓\n")}
                  </code>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-portfolio-accent font-mono text-lg">03.</span> Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-portfolio-text-muted">
                      <span className="text-portfolio-accent mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="md:col-span-1 space-y-8">
              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-portfolio-bg border border-portfolio-border rounded-sm text-portfolio-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-lg">
                <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Links</h3>
                <div className="space-y-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-portfolio-text-muted hover:text-white transition-colors">
                      <FaGithub size={18} /> Source Code <ExternalLink size={14} className="ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}