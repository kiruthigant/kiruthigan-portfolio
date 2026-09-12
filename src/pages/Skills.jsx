import { motion } from "framer-motion";
import { skills } from "../data/skills";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Skills() {
  return (
    <div className="w-full relative min-h-screen pb-24">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <span className="font-mono text-portfolio-accent text-sm tracking-widest uppercase mb-2 block">05 // Capabilities</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h1>
            <p className="text-portfolio-text-muted max-w-2xl mx-auto text-lg">
              An interactive ecosystem of technologies I use to build scalable backends, computer vision pipelines, and intelligent AI integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-lg relative group overflow-hidden"
              >
                {/* Subtle hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-portfolio-border/50 pb-3">
                  <span className="text-portfolio-accent font-mono">{'//'}</span> {skillGroup.category}
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {skillGroup.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <span className="text-portfolio-text-muted group-hover:text-white transition-colors">{item.name}</span>
                      <span className={`text-xs font-mono px-2 py-1 rounded-sm border ${
                        item.level === 'Advanced Focus' 
                          ? 'border-portfolio-accent text-portfolio-accent bg-portfolio-accent/10' 
                          : item.level === 'Primary'
                            ? 'border-portfolio-text-muted/50 text-portfolio-text-muted/80 bg-portfolio-surface'
                            : 'border-transparent text-portfolio-text-muted/50'
                      }`}>
                        {item.level}
                      </span>
                    </div>
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