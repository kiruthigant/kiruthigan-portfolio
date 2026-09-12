import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { education } from "../data/education";
import AnimatedBackground from "../components/AnimatedBackground";
import profileImage from "../assets/profile.jpeg";

export default function About() {
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
          <div className="mb-12">
            <span className="font-mono text-portfolio-accent text-sm tracking-widest uppercase mb-2 block">02 // Profile</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="glass-panel p-2 rounded-lg aspect-square mb-6 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-transparent z-10 pointer-events-none" />
                <div className="w-full h-full bg-portfolio-surface-light flex items-center justify-center border border-portfolio-border rounded-md relative overflow-hidden">
                  <img src={profileImage} alt="Kiruthigan Thangaraj" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <span className="text-portfolio-text-muted block mb-1">LOCATION</span>
                  <span className="text-white">{profile.location}</span>
                </div>
                <div>
                  <span className="text-portfolio-text-muted block mb-1">EMAIL</span>
                  <a href={`mailto:${profile.email}`} className="text-white hover:text-portfolio-accent transition-colors">{profile.email}</a>
                </div>
                <div>
                  <span className="text-portfolio-text-muted block mb-1">GITHUB</span>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-accent transition-colors">github.com/kiruthigant</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div className="glass-panel p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
                <p className="text-portfolio-text-muted leading-relaxed">
                  {profile.summary}
                </p>
              </div>

              <div className="glass-panel p-8 rounded-lg border-l-4 border-l-portfolio-accent">
                <h2 className="text-2xl font-bold text-white mb-4">Engineering Focus</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-portfolio-accent font-bold">»</span>
                    <p className="text-portfolio-text-muted"><strong className="text-white">Applied AI & Automation:</strong> Building autonomous agentic workflows and LLM-integrated backend services that solve real business operational bottlenecks.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-portfolio-accent font-bold">»</span>
                    <p className="text-portfolio-text-muted"><strong className="text-white">Computer Vision:</strong> Developing robust object detection and tracking pipelines (YOLO, Roboflow, OpenCV) deployed in edge and retail environments.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-portfolio-accent font-bold">»</span>
                    <p className="text-portfolio-text-muted"><strong className="text-white">Backend Architecture:</strong> Designing resilient relational databases (PostgreSQL) and RESTful APIs (FastAPI) deployed on scalable cloud infrastructure (AWS).</p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l border-portfolio-border pb-8 last:pb-0">
                    <div className="absolute w-3 h-3 bg-portfolio-bg border-2 border-portfolio-accent rounded-full -left-[7px] top-1"></div>
                    <span className="text-portfolio-accent font-mono text-sm mb-1 block">{edu.period}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.program}</h3>
                    <p className="text-portfolio-text-muted">{edu.university}, {edu.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}