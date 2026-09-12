import { motion } from "framer-motion";
import { personalProjects } from "../data/projects";
import { productionSystems } from "../data/experience";
import ProjectCard from "../components/ProjectCard";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Projects() {
  return (
    <div className="w-full relative min-h-screen pb-24">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-16">
            <span className="font-mono text-portfolio-accent text-sm tracking-widest uppercase mb-2 block">04 // Showroom</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineering Projects</h1>
            <p className="text-portfolio-text-muted max-w-2xl text-lg">
              A collection of systems I've architected, ranging from intelligent automation pipelines to enterprise-grade web platforms.
            </p>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-portfolio-border pb-4">
              Personal Projects
            </h2>
            <p className="text-portfolio-text-muted mb-10">Things I build and experiment with independently.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {personalProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-b border-portfolio-border pb-4 flex items-center gap-3">
              Professional Systems
            </h2>
            <p className="text-portfolio-text-muted mb-10">Systems and software I have contributed to professionally.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productionSystems.map((sys, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-6 rounded-lg border border-portfolio-border/50 hover:border-portfolio-accent/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full"></div>
                    <h3 className="text-xl font-bold text-white">{sys.title}</h3>
                  </div>
                  <p className="text-portfolio-text-muted text-sm mb-6 pl-3 border-l border-portfolio-border/30">
                    {sys.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {sys.themes.map((theme, j) => (
                      <span key={j} className="px-2 py-1 text-xs font-mono bg-portfolio-bg border border-portfolio-border rounded-sm text-portfolio-text-muted">
                        {theme}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}