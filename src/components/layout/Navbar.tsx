import { useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Journey", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topline">
        <span>AVAILABLE FOR INTERNSHIPS &amp; SELECT FREELANCE PROJECTS</span>
        <span className="topline-right"><span className="status-dot" /> INDIA · WORKING WORLDWIDE</span>
      </div>
      <header className="header">
        <a className="brand" href="/#home" onClick={closeMenu} aria-label="Nishant Bhoyar home">
          <span className="brand-mark">NB</span>
          <span>Nishant Bhoyar<span className="brand-sub">AI ENGINEER</span></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen} aria-controls="primary-navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="primary-navigation" aria-label="Primary navigation" className={menuOpen ? "nav nav-open" : "nav"}>
          {links.map(link => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="nav-resume" href="/Nishant-Bhoyar-Resume.pdf" download onClick={closeMenu}>Resume <Download size={14} /></a>\n          <a className="nav-cta" href="/#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>
    </>
  );
}
