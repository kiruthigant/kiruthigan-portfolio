import { motion } from "framer-motion";
import { professionalExperience, productionSystems } from "../data/experience";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Experience() {
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
          <div className="mb-16">
            <span className="font-mono text-portfolio-accent text-sm tracking-widest uppercase mb-2 block">03 // Career</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Experience</h1>
          </div>

          <div className="relative border-l border-portfolio-border ml-3 md:ml-6 space-y-16 mb-24">
            {professionalExperience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute w-4 h-4 bg-portfolio-bg border-2 border-portfolio-accent rounded-full -left-[8.5px] top-1">
                  <div className="absolute inset-0 bg-portfolio-accent rounded-full animate-ping opacity-20"></div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <div className="text-portfolio-accent font-medium text-lg">{exp.company} <span className="text-portfolio-text-muted text-sm ml-2 font-normal">— {exp.location}</span></div>
                  </div>
                  <div className="font-mono text-portfolio-text-muted text-sm mt-2 md:mt-0 bg-portfolio-surface-light px-3 py-1 rounded-sm border border-portfolio-border inline-block self-start">
                    {exp.period}
                  </div>
                </div>
                
                <div className="font-mono text-xs text-portfolio-accent/60 mb-6 border-b border-portfolio-border/30 pb-2">
                  {exp.route}
                </div>
                
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, j) => (
                    <li key={j} className="flex gap-3 text-portfolio-text-muted">
                      <span className="text-portfolio-accent mt-1">▹</span>
                      <p className="leading-relaxed">{resp}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-portfolio-accent font-mono text-lg font-normal">{'<'}</span>
              Professional Systems & Production Experience
              <span className="text-portfolio-accent font-mono text-lg font-normal">{'>'}</span>
            </h2>
            <p className="text-portfolio-text-muted mb-8 border-l-2 border-portfolio-accent pl-4">
              Systems and software I have contributed to professionally. High-level descriptions to respect confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productionSystems.map((sys, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-lg hover:border-portfolio-accent/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{sys.title}</h3>
                <p className="text-portfolio-text-muted text-sm mb-6">{sys.description}</p>
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
        </motion.div>
      </div>
    </div>
  );
}