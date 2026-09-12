import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-lg border border-portfolio-border bg-portfolio-surface hover:border-portfolio-accent/50 transition-all duration-300 overflow-hidden flex flex-col h-full hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-portfolio-accent uppercase tracking-wider">{project.category}</span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
            <ArrowUpRight size={18} className="text-portfolio-accent" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-portfolio-text-muted text-sm mb-6 flex-grow">{project.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-mono bg-portfolio-surface-light border border-portfolio-border rounded-sm text-portfolio-text-muted">
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-1 text-xs font-mono bg-portfolio-surface-light border border-portfolio-border rounded-sm text-portfolio-text-muted">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-4 pt-4 border-t border-portfolio-border/50">
          <Link
            to={project.route}
            className="text-sm font-medium text-white hover:text-portfolio-accent transition-colors flex-grow"
          >
            View Case Study
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}