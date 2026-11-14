import { ArrowUpRight, BrainCircuit, Code2, GraduationCap, Workflow } from "lucide-react";

const principles = [
  {
    icon: BrainCircuit,
    title: "AI with a purpose",
    description: "I focus on practical LLM applications: retrieval-augmented generation, tool-using agents and workflows that address a clear user problem.",
  },
  {
    icon: Code2,
    title: "Engineering beyond the demo",
    description: "I care about the foundations around an AI feature too — APIs, data flow, validation, reliability and an interface people can use.",
  },
  {
    icon: Workflow,
    title: "Learn by building",
    description: "I strengthen my understanding by designing, implementing, testing and iterating on end-to-end projects rather than stopping at tutorials.",
  },
];

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="section-wrap">
        <div className="section-label"><span>01</span> / ABOUT ME</div>
        <div className="about-intro-grid">
          <div className="about-heading-wrap">
            <span className="about-kicker">THE PERSON BEHIND THE BUILDS</span>
            <h2 id="about-title">Curious by nature.<br /><span className="serif-accent">Builder</span> by choice.</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">I’m Nishant Bhoyar, a Computer Engineering student working towards a career in AI engineering.</p>
            <p>I enjoy building software at the intersection of large language models, retrieval systems and backend engineering. My focus is on turning ideas into useful applications — from document-aware assistants to multi-step agent workflows.</p>
            <p>I’m continuing to grow through hands-on projects, careful experimentation and the discipline of making systems understandable, testable and useful.</p>
            <a className="about-inline-link" href="#projects">Explore the projects I’m building <ArrowUpRight size={15} /></a>
          </div>
        </div>

        <div className="about-lower-grid">
          <article className="education-card">
            <div className="education-icon"><GraduationCap size={22} /></div>
            <div className="education-content">
              <span className="about-card-label">EDUCATION</span>
              <h3>B.E. Computer Engineering</h3>
              <p>Currently pursuing · Expected graduation June 2027</p>
            </div>
            <span className="education-year">2027</span>
          </article>
          <div className="principles-grid">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="principle-card" key={item.title}>
                  <div className="principle-top"><span>0{index + 1}</span><Icon size={19} strokeWidth={1.6} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
