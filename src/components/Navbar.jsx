import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/experience", label: "EXPERIENCE" },
  { path: "/projects", label: "PROJECTS" },
  { path: "/skills", label: "SKILLS" },
  { path: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-portfolio-surface/80 backdrop-blur-md border-b border-portfolio-border/50 shadow-lg py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo / Initials */}
          <Link to="/" className="text-xl font-mono font-bold tracking-tighter text-white group">
            <span className="text-portfolio-accent">&lt;</span>KT<span className="text-portfolio-accent group-hover:animate-pulse">_</span><span className="text-portfolio-accent">/&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium tracking-widest transition-colors hover:text-portfolio-accent",
                    isActive ? "text-portfolio-accent" : "text-portfolio-text-muted"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="/cv/Kiruthigan_Thangaraj_CV.pdf"
              download
              className="flex items-center space-x-2 bg-portfolio-accent/10 border border-portfolio-accent/30 text-portfolio-accent px-4 py-2 rounded-sm text-sm font-medium hover:bg-portfolio-accent/20 transition-all"
            >
              <Download size={16} />
              <span>DOWNLOAD CV</span>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-portfolio-text hover:text-portfolio-accent"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-portfolio-surface flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-portfolio-border/30">
              <span className="text-xl font-mono font-bold text-white">&lt;KT_/&gt;</span>
              <button onClick={() => setMobileOpen(false)} className="text-portfolio-text hover:text-portfolio-accent">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 p-8 mt-12">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-2xl font-semibold tracking-widest transition-colors",
                      isActive ? "text-portfolio-accent" : "text-portfolio-text-muted hover:text-white"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="/cv/Kiruthigan_Thangaraj_CV.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="mt-8 flex justify-center items-center space-x-2 bg-portfolio-accent/10 border border-portfolio-accent text-portfolio-accent px-6 py-4 rounded-sm text-lg font-medium hover:bg-portfolio-accent/20 transition-all"
              >
                <Download size={20} />
                <span>DOWNLOAD CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}