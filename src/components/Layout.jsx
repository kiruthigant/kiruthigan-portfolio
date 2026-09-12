import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-portfolio-bg text-portfolio-text selection:bg-portfolio-accent/30 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}