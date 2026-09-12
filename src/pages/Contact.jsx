import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/profile";
import AnimatedBackground from "../components/AnimatedBackground";
import Terminal from "../components/Terminal";

export default function Contact() {
  const terminalLines = [
    `Initializing secure connection...`,
    `> ping ${profile.email.split('@')[1]}`,
    `> PING ${profile.email.split('@')[1]} (192.0.2.1): 56 data bytes`,
    `> 64 bytes from 192.0.2.1: icmp_seq=0 ttl=119 time=13.37 ms`,
    `Target is reachable.`,
    `Awaiting your message...`
  ];

  return (
    <div className="w-full relative min-h-screen pb-24 flex items-center">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-portfolio-accent text-sm tracking-widest uppercase mb-4 block">06 // Connect</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Let's Build Something Intelligent.</h1>
            <p className="text-portfolio-text-muted text-lg max-w-xl mb-10 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={`mailto:${profile.email}`} 
                className="bg-portfolio-accent text-portfolio-bg px-8 py-4 rounded-sm font-bold text-lg hover:bg-portfolio-accent/90 transition-all text-center flex items-center justify-center gap-2"
              >
                <FaEnvelope /> Email Me
              </a>
              <div className="flex gap-4">
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 glass-panel flex items-center justify-center px-6 py-4 rounded-sm hover:border-[#0a66c2]/50 hover:text-[#0a66c2] transition-colors text-white"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 glass-panel flex items-center justify-center px-6 py-4 rounded-sm hover:border-white/50 hover:text-white transition-colors text-portfolio-text-muted"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-lg max-w-md border-l-4 border-l-portfolio-accent">
              <h3 className="text-white font-bold mb-2">Direct Contact</h3>
              <a href={`mailto:${profile.email}`} className="text-portfolio-text-muted hover:text-portfolio-accent font-mono block">
                {profile.email}
              </a>
              <span className="text-portfolio-text-muted/60 text-sm mt-2 block">{profile.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center w-full"
          >
            <div className="relative w-full max-w-lg shadow-[0_0_40px_rgba(56,189,248,0.1)]">
              <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-accent to-purple-600 rounded-lg blur opacity-20"></div>
              <Terminal command="contact --secure" lines={terminalLines} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}