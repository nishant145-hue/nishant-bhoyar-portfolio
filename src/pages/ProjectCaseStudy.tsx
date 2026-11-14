import { ArrowLeft, ArrowUpRight, Check, Github, LockKeyhole, Workflow } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";

type CaseStudy = {
  slug: string; number: string; title: string; category: string; summary: string;
  problem: string; approach: string; stack: string[]; capabilities: string[];
  architecture: string[]; implementation: string[]; considerations: string[];
  repository?: string; privateRepo?: boolean; statusNote: string;
};

const github = "https://github.com/nishant145-hue";

const studies: CaseStudy[] = [
  {
    slug: "ai-root-cause-investigator", number: "01", title: "AI Root Cause Investigator",
    category: "AGENTIC AI · INVESTIGATION WORKFLOW",
    summary: "An AI-powered investigation platform designed to help analyze operational evidence and organize a structured root-cause investigation.",
    problem: "Operational investigations can involve large amounts of logs and supporting evidence. Reviewing that material consistently and documenting a reasoned investigation can be time-consuming.",
    approach: "The project uses a staged LangGraph workflow to organize investigation tasks. Evidence is ingested for analysis, and the workflow separates planning, reasoning, reflection and validation rather than treating the task as a single prompt.",
    stack: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "Qdrant", "React", "TypeScript", "Groq API"],
    capabilities: ["Investigation creation and management", "Evidence upload and parsing workflow", "Multi-stage agent execution", "RAG-supported context retrieval", "Execution observability and timeline", "Investigation reporting workflow"],
    architecture: ["React + TypeScript UI", "FastAPI application layer", "LangGraph orchestration", "LLM + retrieval services", "PostgreSQL and vector storage"],
    implementation: ["Separate agent responsibilities into planner, reasoner, reflector and validator stages.", "Use FastAPI endpoints to manage investigation workflows and execution.", "Persist application and investigation data using PostgreSQL.", "Use retrieval components to supply relevant context to the investigation process.", "Expose execution and observability information through the application interface."],
    considerations: ["Agent output should be treated as decision support and reviewed against source evidence.", "Investigation quality depends on the completeness and quality of uploaded evidence.", "The system should make uncertainty and supporting evidence visible rather than imply certainty."],
    repository: `${github}/AI-Root-Cause-Investigator`,
    statusNote: "The case study describes the current project scope; confirm the repository and live deployment before sharing externally."
  },
  {
    slug: "pdf-chat-rag", number: "02", title: "PDF Chat RAG",
    category: "GENERATIVE AI · RETRIEVAL-AUGMENTED GENERATION",
    summary: "A document question-answering application that lets users work with PDF content and ask questions grounded in retrieved source material.",
    problem: "Finding a specific answer inside a long PDF often requires manually searching pages and piecing together relevant passages.",
    approach: "The application follows a retrieval-augmented generation flow: extract text from uploaded documents, split it into retrievable chunks, create embeddings, retrieve relevant context for a question and provide that context to the language model when generating an answer.",
    stack: ["Python", "FastAPI", "RAG", "Embeddings", "Vector Search", "LLM APIs"],
    capabilities: ["PDF upload and text extraction", "Chunking and embedding workflow", "Semantic retrieval", "Context-grounded question answering", "API-driven application structure"],
    architecture: ["Document upload", "PDF text extraction", "Chunking + embeddings", "Vector index / retrieval", "Context + LLM answer"],
    implementation: ["Process uploaded PDF files into text suitable for indexing.", "Split extracted text into chunks for retrieval.", "Represent chunks as embeddings and store them in a vector index.", "Retrieve relevant chunks for each user question.", "Pass retrieved context to the language model to produce a grounded response."],
    considerations: ["Answer quality depends on extraction quality, chunk design and retrieval relevance.", "The application should communicate when the available document context is insufficient.", "A production deployment should validate file type and size and isolate user documents appropriately."],
    repository: `${github}/pdf-chat-rag`,
    statusNote: "The workflow shown is the intended RAG pipeline; verify the exact models, vector store and current feature set against the latest repository before publication."
  },
  {
    slug: "cybershield-url-scanner", number: "03", title: "CyberShield URL Scanner",
    category: "PYTHON BACKEND · URL SECURITY",
    summary: "A URL-scanning project focused on analyzing submitted links and presenting useful security signals through an API-driven workflow.",
    problem: "People need a quick way to submit a URL for inspection and review security-related signals before deciding whether to visit it.",
    approach: "CyberShield is structured as a Python backend project with an API-driven URL analysis workflow. The portfolio presents the project at a high level without exposing private source code or claiming security guarantees.",
    stack: ["Python", "FastAPI", "REST APIs"],
    capabilities: ["URL submission workflow", "Backend API development", "Security-oriented analysis flow", "Result presentation"],
    architecture: ["Client submits URL", "FastAPI endpoint validates request", "URL analysis workflow", "Analysis signals are assembled", "Result returned through API"],
    implementation: ["Accept a URL through an API-oriented workflow.", "Keep request handling and analysis logic organized in the backend.", "Return structured information for the client to display.", "Treat results as signals for review, not a guarantee that a URL is safe."],
    considerations: ["URL scanning results cannot guarantee that a destination is safe.", "A production scanner needs protections against SSRF, redirects to private networks and resource exhaustion.", "Source code is private; technical details can be discussed in a walkthrough upon request."],
    privateRepo: true,
    statusNote: "Source code is private. A technical walkthrough can be shared upon request."
  }
];

function Architecture({ items }: { items: string[] }) {
  return <div className="case-architecture" aria-label="High-level architecture flow">
    {items.map((item, index) => <div className="architecture-step" key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < items.length - 1 && <i aria-hidden="true">→</i>}</div>)}
  </div>;
}

export function ProjectCaseStudy() {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();
  const study = studies.find((item) => item.slug === slug);

  if (!study) {
    return <div className="site-shell"><Navbar /><main className="case-not-found section-wrap"><span className="section-label">PROJECT / NOT FOUND</span><h1>This case study<br /><em>isn't available.</em></h1><a className="case-back-link" href="/#projects"><ArrowLeft size={16} /> Back to projects</a></main></div>;
  }

  return <div className="site-shell"><Navbar /><main className="case-study-page">
    <div className="section-wrap">
      <a className="case-back-link" href="/#projects"><ArrowLeft size={15} /> Back to all projects</a>
      <header className="case-hero">
        <div className="section-label"><span>PROJECT {study.number}</span> / CASE STUDY</div>
        <div className="case-category">{study.category}</div>
        <h1>{study.title.split(" ").slice(0, -1).join(" ")} <em>{study.title.split(" ").slice(-1)}</em></h1>
        <p>{study.summary}</p>
        <div className="case-hero-actions">
          {study.repository ? <a className="button button-dark" href={study.repository} target="_blank" rel="noreferrer"><Github size={16} /> View repository <ArrowUpRight size={15} /></a> : <span className="private-repo-badge"><LockKeyhole size={15} /> Private repository</span>}
          <span className="case-status-note">{study.statusNote}</span>
        </div>
      </header>

      <section className="case-section"><div className="case-section-heading"><span>01 / THE PROBLEM</span><h2>Context before<br /><em>code.</em></h2></div><div className="case-section-body"><p>{study.problem}</p><h3>My approach</h3><p>{study.approach}</p></div></section>

      <section className="case-architecture-section"><div className="section-label">02 / HIGH-LEVEL SYSTEM FLOW</div><h2>How the pieces<br /><em>fit together.</em></h2><Architecture items={study.architecture} /><p className="case-caption">Conceptual architecture overview. This is a high-level representation, not a deployment diagram.</p></section>

      <section className="case-section"><div className="case-section-heading"><span>03 / CAPABILITIES</span><h2>What it<br /><em>does.</em></h2></div><div className="case-section-body"><div className="case-capability-grid">{study.capabilities.map((item) => <div className="case-capability" key={item}><Check size={16} />{item}</div>)}</div></div></section>

      <section className="case-section"><div className="case-section-heading"><span>04 / IMPLEMENTATION</span><h2>Engineering<br /><em>decisions.</em></h2></div><div className="case-section-body"><ol className="case-implementation-list">{study.implementation.map((item) => <li key={item}>{item}</li>)}</ol></div></section>

      <section className="case-stack-section"><div><div className="section-label">05 / TECHNOLOGY</div><h2>Built with the<br /><em>right tools.</em></h2></div><div className="case-stack">{study.stack.map((item) => <span key={item}>{item}</span>)}</div></section>

      <section className="case-section case-considerations"><div className="case-section-heading"><span>06 / LIMITATIONS & CARE</span><h2>What matters<br /><em>in practice.</em></h2></div><div className="case-section-body"><ul>{study.considerations.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

      <footer className="case-footer"><div><Workflow size={20} /><span>Want to discuss the engineering behind this project?</span></div><a href="/#contact">Let's talk <ArrowUpRight size={15} /></a></footer>
    </div>
  </main></div>;
}
