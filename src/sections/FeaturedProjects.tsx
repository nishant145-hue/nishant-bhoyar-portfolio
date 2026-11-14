import {
  ArrowUpRight,
  FileText,
  BrainCircuit,
  FileSearch,
  Github,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const GITHUB = "https://github.com/nishant145-hue";

const projects = [
  {
    number: "01",
    name: "AI Root Cause Investigator",
    category: "AGENTIC AI · INVESTIGATION WORKFLOW",
    description:
      "An AI-powered investigation platform designed to help analyze operational evidence and organize a structured root-cause investigation.",
    capabilities: [
      "Multi-stage LangGraph workflow",
      "Evidence ingestion and analysis",
      "Investigation execution and observability",
    ],
    stack: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "Qdrant", "React"],
    repository: `${GITHUB}/AI-Root-Cause-Investigator`,
    caseStudy: "/projects/ai-root-cause-investigator",
    visual: "investigator",
    icon: BrainCircuit,
    visualLabel: "INVESTIGATION WORKFLOW",
    visualDetail: "PLAN  →  REASON  →  REFLECT  →  VALIDATE",
  },
  {
    number: "02",
    name: "PDF Chat RAG",
    category: "GENERATIVE AI · RETRIEVAL-AUGMENTED GENERATION",
    description:
      "A document question-answering application that lets users work with PDF content and ask questions grounded in retrieved source material.",
    capabilities: [
      "PDF ingestion and text processing",
      "Embedding-based retrieval",
      "Context-aware question answering",
    ],
    stack: ["Python", "FastAPI", "RAG", "Embeddings", "Vector Search"],
    repository: `${GITHUB}/pdf-chat-rag`,
    caseStudy: "/projects/pdf-chat-rag",
    visual: "rag",
    icon: FileSearch,
    visualLabel: "DOCUMENT KNOWLEDGE",
    visualDetail: "UPLOAD  →  CHUNK  →  RETRIEVE  →  ANSWER",
  },
  {
    number: "03",
    name: "CyberShield URL Scanner",
    category: "PYTHON BACKEND · URL SECURITY",
    description:
      "A URL-scanning project focused on analyzing submitted links and presenting useful security signals through an API-driven workflow.",
    capabilities: [
      "URL submission and analysis flow",
      "Backend API development",
      "Security-focused result presentation",
    ],
    stack: ["Python", "FastAPI", "REST APIs"],
    repository: undefined,
    caseStudy: "/projects/cybershield-url-scanner",
    privateRepo: true,
    visual: "cyber",
    icon: ShieldCheck,
    visualLabel: "URL ANALYSIS",
    visualDetail: "SUBMIT  →  INSPECT  →  REVIEW",
  },
];

export function FeaturedProjects() {
  return (
    <section className="featured-projects section-pad" id="projects" aria-labelledby="projects-title">
      <div className="section-wrap">
        <div className="section-label"><span>03</span> / SELECTED WORK</div>
        <div className="section-heading">
          <h2 id="projects-title">Built with intent.<br /><span className="serif-accent">Made to matter.</span></h2>
          <p>Selected projects that show how I approach AI engineering, retrieval systems and backend development—from architecture to working software.</p>
        </div>

        <div className="featured-project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="featured-project-card" key={project.number}>
                <div className={`project-visual project-visual-${project.visual}`} aria-label={`${project.name} concept illustration`}>
                  <div className="project-visual-top">
                    <span>PROJECT / {project.number}</span>
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <div className="project-visual-center">
                    {project.visual === "investigator" && (
                      <div className="agent-flow" aria-hidden="true">
                        {["Planner", "Reasoner", "Reflector", "Validator"].map((node, index) => (
                          <div className="agent-node" key={node}><span>0{index + 1}</span>{node}</div>
                        ))}
                      </div>
                    )}
                    {project.visual === "rag" && (
                      <div className="rag-stack" aria-hidden="true">
                        <div className="rag-document"><span>PDF</span><i /><i /><i /></div>
                        <div className="rag-connector"><span /><span /><span /></div>
                        <div className="rag-result"><FileSearch size={25} /><span>RETRIEVED CONTEXT</span></div>
                      </div>
                    )}
                    {project.visual === "cyber" && (
                      <div className="cyber-scan" aria-hidden="true">
                        <div className="scan-ring"><ShieldCheck size={43} strokeWidth={1.2} /></div>
                        <div className="scan-lines"><i /><i /><i /></div>
                      </div>
                    )}
                  </div>
                  <div className="project-visual-footer"><span>{project.visualLabel}</span><span className="visual-live-dot" /> <span>{project.visualDetail}</span></div>
                </div>

                <div className="featured-project-content">
                  <div className="featured-project-meta"><span>{project.category}</span><span>{project.number} / 03</span></div>
                  <h3>{project.name}</h3>
                  <p className="featured-project-description">{project.description}</p>
                  <div className="project-capabilities">
                    {project.capabilities.map((capability) => (
                      <div className="project-capability" key={capability}><span className="capability-check">✓</span>{capability}</div>
                    ))}
                  </div>
                  <div className="featured-project-tags">
                    {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <div className="featured-project-actions">
                    <a className="featured-project-link" href={project.caseStudy}>
                      <FileText size={16} /> View case study <ArrowUpRight size={15} />
                    </a>
                    {project.repository ? (
                      <a className="featured-project-repository" href={project.repository} target="_blank" rel="noreferrer">
                        <Github size={15} /> Repository
                      </a>
                    ) : (
                      <span className="private-project-note">Private source code</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-footer">
          <div><Workflow size={19} /><span>Interested in the engineering behind these builds?</span></div>
          <a href="#contact">Discuss a project <ArrowUpRight size={15} /></a>
        </div>
        <p className="projects-disclaimer">Project descriptions summarize the current portfolio work. Detailed architecture, implementation decisions and project walkthroughs will be presented in individual case studies.</p>
      </div>
    </section>
  );
}
