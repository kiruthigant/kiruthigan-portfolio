import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import Terminal from "../components/Terminal";

export default function NotFound() {
  const terminalLines = [
    `Error: 404`,
    `> route_not_found: The requested path does not exist.`,
    `> Searching filesystem... Failed.`,
    `> Recovering state... Ready.`,
    `Please navigate back to a safe zone.`
  ];

  return (
    <div className="w-full relative min-h-screen pb-24 flex items-center justify-center text-center">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="mb-12 w-full">
            <Terminal command="cd /unknown-route" lines={terminalLines} />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-portfolio-text-muted text-xl mb-8">
            The page you are looking for has drifted into the void.
          </p>
          
          <div className="flex gap-4">
            <Link to="/" className="bg-portfolio-accent text-portfolio-bg px-6 py-3 rounded-sm font-bold hover:bg-portfolio-accent/90 transition-all">
              Return Home
            </Link>
            <Link to="/projects" className="glass-panel text-white px-6 py-3 rounded-sm font-bold hover:bg-portfolio-surface-light transition-all">
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}