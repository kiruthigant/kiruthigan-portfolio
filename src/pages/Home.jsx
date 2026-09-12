import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Terminal from "../components/Terminal";
import AnimatedBackground from "../components/AnimatedBackground";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import { personalProjects } from "../data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const terminalLines = [
    `Loading profile...`,
    `> Name: ${profile.name}`,
    `> Role: ${profile.role}`,
    `> Location: ${profile.location}`,
    `> Status: Ready for deploy`,
    `Connection established.`
  ];

  return (
    <div className="w-full relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="font-mono text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-sm border border-portfolio-accent/20 text-sm">
                kiruthigan@portfolio:~$ whoami
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm Kiruthigan <span className="animate-pulse inline-block origin-bottom-right">👋</span>
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="space-y-2">
              <h2 className="text-2xl md:text-3xl text-portfolio-text font-medium">{profile.role}</h2>
              <p className="text-portfolio-text-muted font-mono text-sm md:text-base border-l-2 border-portfolio-accent pl-4 py-1">
                {profile.secondaryRole}
              </p>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-portfolio-text-muted text-lg max-w-xl leading-relaxed">
              {profile.heroText}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects" className="bg-portfolio-accent text-portfolio-bg px-6 py-3 rounded-sm font-medium hover:bg-portfolio-accent/90 transition-all flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </Link>
              <a href="/cv/Kiruthigan_Thangaraj_CV.pdf" download className="border border-portfolio-border bg-portfolio-surface hover:border-portfolio-accent/50 hover:bg-portfolio-surface-light text-white px-6 py-3 rounded-sm font-medium transition-all flex items-center gap-2">
                <Download size={18} /> Download CV
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-lg">
              {/* Abstract decorative elements behind terminal */}
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-accent/20 to-transparent blur-2xl rounded-full opacity-50"></div>
              
              <Terminal command="system.status()" lines={terminalLines} />
              
              {/* Small floating status box */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 md:-left-12 glass-panel p-4 rounded-md flex items-center gap-3 border border-portfolio-accent/30"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="font-mono text-xs text-white">
                  <div className="text-portfolio-text-muted">SYSTEM_STATUS</div>
                  <div>ONLINE & READY</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-6 py-12 border-t border-b border-portfolio-border/50 bg-portfolio-surface/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 divide-x divide-portfolio-border/50">
          {profile.quickStats.map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className={`flex flex-col items-center justify-center text-center ${i !== 0 ? 'pl-6 md:pl-0' : ''}`}
            >
              <span className="text-3xl md:text-4xl font-bold text-white font-mono mb-2">{stat.value}</span>
              <span className="text-xs md:text-sm text-portfolio-text-muted uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-portfolio-border pb-6"
        >
          <div>
            <span className="font-mono text-portfolio-accent text-sm tracking-widest uppercase mb-2 block">01 // Showroom</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <Link to="/projects" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors flex items-center gap-1 font-mono text-sm mt-4 md:mt-0">
            VIEW ALL <ArrowRight size={16} />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {personalProjects.slice(0, 4).map((project, i) => (
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
      </section>
      
      {/* Contact CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 rounded-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-portfolio-accent to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Something Intelligent.</h2>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto mb-10 text-lg">
            Looking for a Software & AI Engineer to build resilient backend architectures, automated data pipelines, or computer vision systems?
          </p>
          <Link to="/contact" className="inline-block bg-white text-portfolio-bg px-8 py-4 rounded-sm font-bold text-lg hover:bg-portfolio-accent transition-colors">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}