import {
  ArrowDown, ArrowRight, ArrowUpRight, Download, BrainCircuit, Code2,
  Database, Github, Linkedin, Sparkles, Workflow,
} from "lucide-react";

const GITHUB = "https://github.com/nishant145-hue";

export function HeroSection() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> AI ENGINEER &amp; DEVELOPER</div>
        <h1 id="hero-title">I build AI systems<br />that <span className="serif-accent">solve real</span><br />problems<span className="period">.</span></h1>
        <p className="hero-lead">
          I’m Nishant — a Computer Engineering student focused on building practical
          AI applications, intelligent agents, RAG systems and dependable Python backends.
        </p>
        <div className="hero-specialties" aria-label="Areas of focus">
          <span><BrainCircuit size={14} /> Agentic AI</span>
          <span><Database size={14} /> RAG Systems</span>
          <span><Code2 size={14} /> Python Backend</span>
        </div>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="button button-outline" href="#contact">Hire me <ArrowRight size={16} /></a>
          <a className="resume-link" href="/Nishant-Bhoyar-Resume.pdf" download aria-label="Download my resume">Download resume <Download size={14} /></a>
        </div>
        <div className="hero-meta">
          <span><span className="status-dot" /> OPEN TO INTERNSHIPS &amp; PROJECTS</span>
          <span>INDIA · REMOTE FRIENDLY</span>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a>\n          <a href="https://www.linkedin.com/in/nishant-bhoyar-2b7658346/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} /></a>
          <span className="social-divider" />
          <span className="hero-role-note">B.E. COMPUTER ENGINEERING · CLASS OF 2027</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Abstract illustration representing AI engineering">
        <div className="visual-grid" />
        <div className="visual-glow" />
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="orbit-node node-one" /><div className="orbit-node node-two" />
        <div className="core-card">
          <div className="core-top"><span>BUILDING WITH AI</span><Sparkles size={16} /></div>
          <div className="core-icon"><BrainCircuit size={45} strokeWidth={1.25} /></div>
          <div className="core-title">From idea<br />to intelligence.</div>
          <div className="core-bottom"><span className="pulse" /> SYSTEMS THINKING · REAL-WORLD BUILDING</div>
        </div>
        <div className="float-tag tag-top"><Database size={15} /> RAG SYSTEMS</div>
        <div className="float-tag tag-bottom"><Workflow size={15} /> AI AGENTS</div>
        <div className="visual-index">01 / 05 — INTRODUCTION</div>
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
    </section>
  );
}
