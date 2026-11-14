import {
  ArrowUpRight, Bot, BrainCircuit, Check, Code2, Github, Linkedin, MessageSquareText, Workflow, Database, Layers3, Server
} from "lucide-react";

import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";
import { ContactSection } from "./sections/ContactSection";

const GITHUB = "https://github.com/nishant145-hue";
// Add your real email and LinkedIn URL before publishing.
const EMAIL = "nishantbhoyar4016@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/nishant-bhoyar-2b7658346/";

const services = [
  {
    number: "01", icon: MessageSquareText, title: "AI Chatbot Development",
    summary: "Helpful conversational experiences for customers, teams and products.",
    detail: "Build assistants that answer questions, guide users and connect to the information your business already owns.",
    deliverables: ["Website and support chatbots", "Knowledge-base assistants", "Conversation and API integrations"],
    useCase: "Customer support · Internal helpdesk · Product guidance",
    stack: ["Python", "FastAPI", "LLM APIs", "React"]
  },
  {
    number: "02", icon: Database, title: "RAG Application Development",
    summary: "Make documents and private knowledge searchable through natural language.",
    detail: "Create retrieval-augmented applications that find relevant context and generate answers grounded in your source material.",
    deliverables: ["PDF and document Q&A", "Website and knowledge search", "Source-aware answer workflows"],
    useCase: "Company knowledge · Research · Document workflows",
    stack: ["RAG", "Embeddings", "Qdrant", "FAISS"]
  },
  {
    number: "03", icon: BrainCircuit, title: "Agentic AI Development",
    summary: "AI workflows that can plan tasks, use tools and coordinate multiple steps.",
    detail: "Design controlled agent workflows with clear state, tool boundaries, validation and human review where appropriate.",
    deliverables: ["Tool-using AI agents", "Multi-step LangGraph workflows", "Agent evaluation and guardrails"],
    useCase: "Research assistants · Operations · Workflow copilots",
    stack: ["LangGraph", "Python", "LLM APIs", "FastAPI"]
  },
  {
    number: "04", icon: Workflow, title: "AI Workflow Automation",
    summary: "Reduce repetitive work by connecting services, APIs and AI capabilities.",
    detail: "Map a manual process, identify useful automation opportunities and build a workflow with observable steps and failure handling.",
    deliverables: ["API and SaaS integrations", "Document and data processing", "Notifications and task routing"],
    useCase: "Lead handling · Reporting · Back-office processes",
    stack: ["Python", "REST APIs", "FastAPI", "Automation"]
  },
  {
    number: "05", icon: Code2, title: "Python Backend Development",
    summary: "Reliable backend foundations for web applications and AI products.",
    detail: "Develop maintainable APIs and services with validation, database integration, authentication foundations and clear documentation.",
    deliverables: ["FastAPI REST APIs", "Database models and integrations", "Testing and API documentation"],
    useCase: "Product backends · Internal tools · AI service APIs",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"]
  },
  {
    number: "06", icon: Bot, title: "AI MVP & Prototype Development",
    summary: "Turn a defined product idea into a focused, testable first version.",
    detail: "Validate the core use case, shape a practical technical approach and build a working prototype that can be tested with real users.",
    deliverables: ["Problem and scope breakdown", "Working AI-powered prototype", "Handover notes and next-step roadmap"],
    useCase: "Startup concepts · Proofs of concept · New AI features",
    stack: ["React", "Python", "FastAPI", "LLM APIs"]
  }
];

const skillGroups = [
  {
    number: "01", icon: BrainCircuit, title: "AI & Agentic Engineering",
    description: "Building LLM-powered applications and structured multi-step agent workflows.",
    skills: ["LangGraph", "LLM APIs", "RAG", "Prompt Engineering", "Multi-Agent Workflows"]
  },
  {
    number: "02", icon: Database, title: "Retrieval & Vector Search",
    description: "Turning documents and knowledge sources into searchable context for AI applications.",
    skills: ["Qdrant", "FAISS", "Chroma", "Embeddings", "Sentence Transformers"]
  },
  {
    number: "03", icon: Server, title: "Backend & Data",
    description: "Developing API-driven services, data models and application foundations.",
    skills: ["Python", "FastAPI", "REST APIs", "SQLAlchemy / SQLModel", "PostgreSQL", "JWT"]
  },
  {
    number: "04", icon: Layers3, title: "Frontend & Engineering Tools",
    description: "Connecting backend capabilities to usable interfaces and repeatable delivery workflows.",
    skills: ["React", "TypeScript", "Vite", "Docker", "Git", "GitHub Actions", "Pytest"]
  }
];

function App() {
  if (window.location.pathname.startsWith("/projects/")) return <ProjectCaseStudy />;

  const emailReady = !EMAIL.includes("YOUR_");
  const linkedinReady = !LINKEDIN.includes("YOUR_");

  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <HeroSection />

        <section className="intro-band"><div className="section-wrap intro-inner"><span>MY FOCUS</span><p>Practical AI engineering — <b>useful products,</b> thoughtful systems, and software built to work beyond a demo.</p><span className="intro-index">01—2026</span></div></section>

        <AboutSection />

        <section className="services-section section-pad" id="services">
          <div className="section-wrap">
            <div className="section-label"><span>02</span> / WHAT I CAN BUILD</div>
            <div className="section-heading">
              <h2>Services for your<br /><span className="serif-accent">next big idea.</span></h2>
              <p>Practical AI and software development for teams that want to solve a real problem—not add AI just for the sake of it.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-detail-card" key={service.number}>
                  <div className="service-detail-top">
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><service.icon size={21} strokeWidth={1.55} /></span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>
                  <p className="service-detail-copy">{service.detail}</p>
                  <div className="service-deliverables">
                    <span className="service-mini-label">WHAT I CAN DELIVER</span>
                    {service.deliverables.map((item) => <span className="service-deliverable" key={item}><Check size={13} />{item}</span>)}
                  </div>
                  <div className="service-usecase"><span className="service-mini-label">EXAMPLE USE CASES</span><p>{service.useCase}</p></div>
                  <div className="service-stack">{service.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a
                    className="service-inquiry-link"
                    href="#contact"
                    aria-label={`Discuss a ${service.title} project`}
                  >
                    Discuss a project <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>
            <div className="services-note"><span className="status-dot" /> <span>Have a different AI or software challenge?</span><a href="#contact">Tell me about it <ArrowUpRight size={14} /></a></div>
          </div>
        </section>

        <FeaturedProjects />

        <section className="skills-section section-pad" id="skills">
          <div className="section-wrap">
            <div className="section-label"><span>04</span> / TECHNICAL EXPERTISE</div>
            <div className="skills-heading-row">
              <div><h2>My technical<br /><span className="serif-accent">toolkit.</span></h2></div>
              <p className="skills-intro">The tools and concepts I use to design, build and connect AI-powered products—from retrieval pipelines and agent workflows to dependable application backends.</p>
            </div>
            <div className="skills-category-grid">
              {skillGroups.map((group) => (
                <article className="skills-category-card" key={group.number}>
                  <div className="skills-category-top"><span>{group.number} / EXPERTISE</span><group.icon size={21} strokeWidth={1.55} /></div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skills-category-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
            <div className="skills-footnote"><span className="status-dot" /> Skills shown reflect tools and concepts used across my projects and ongoing engineering practice.</div>
          </div>
        </section>

        <ExperienceSection />

        <ContactSection />

      </main>
    </div>
  );
}
export default App;
