import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-portfolio-border bg-portfolio-surface mt-24">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <span className="text-xl font-bold text-white tracking-wide">{profile.name}</span>
          <span className="text-portfolio-text-muted text-sm max-w-sm">{profile.role}</span>
          <span className="text-portfolio-text-muted/60 text-xs mt-4 block">&copy; {year} {profile.name}. All rights reserved.</span>
        </div>

        <div className="flex gap-6 items-center">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-portfolio-text-muted hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-portfolio-text-muted hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-portfolio-text-muted hover:text-white transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="/cv/Kiruthigan_Thangaraj_CV.pdf" download className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors flex items-center gap-1 text-sm font-medium ml-2 border-l border-portfolio-border pl-6" aria-label="Download CV">
            <Download size={16} /> CV
          </a>
        </div>
      </div>
    </footer>
  );
}