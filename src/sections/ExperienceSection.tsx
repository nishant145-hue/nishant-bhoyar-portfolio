import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Layers3, Workflow, School } from "lucide-react";

const milestones = [
  {
    period: "ONGOING · PROJECT-BASED EXPERIENCE",
    title: "AI application engineering",
    description: "Building end-to-end AI applications that connect LLM capabilities with retrieval, backend services and usable interfaces.",
    points: ["Designing RAG workflows and document-aware assistants", "Developing Python and FastAPI services", "Exploring structured agent workflows with LangGraph"],
    icon: Workflow,
    kind: "PROJECT EXPERIENCE",
  },
  {
    period: "ONGOING · HANDS-ON DEVELOPMENT",
    title: "Backend, reliability & product foundations",
    description: "Strengthening the engineering foundations around AI features through implementation, testing and iteration.",
    points: ["Working with APIs, data models and PostgreSQL", "Practising testing, Docker and CI workflows", "Building React and TypeScript interfaces for AI tools"],
    icon: Layers3,
    kind: "ENGINEERING PRACTICE",
  },
  {
    period: "CURRENT EDUCATION · EXPECTED JUNE 2027",
    title: "B.E. Computer Engineering",
    description: "Bharati Vidyapeeth's College of Engineering, Lavale — currently pursuing the undergraduate degree.",
    points: ["Six semester SGPA results available", "Semesters 7 and 8 pending"],
    icon: GraduationCap,
    kind: "UNDERGRADUATE",
    education: true,
  },
  {
    period: "CLASS 12 · HSC",
    title: "Higher Secondary Education",
    description: "Class 12 — 62%.",
    points: ["Percentage: 62%"],
    icon: School,
    kind: "HSC",
    education: true,
  },
  {
    period: "2021 · CLASS 10",
    title: "Gondia Public School, Gondia",
    description: "Secondary School Certificate — CBSE.",
    points: ["Board: CBSE", "Year: 2021", "Percentage: 60.37%"],
    icon: School,
    kind: "SSC",
    education: true,
  },
];

const semesterResults = [
  { semester: "Semester 1", sgpa: "7.27" },
  { semester: "Semester 2", sgpa: "7.00" },
  { semester: "Semester 3", sgpa: "7.00" },
  { semester: "Semester 4", sgpa: "7.05" },
  { semester: "Semester 5", sgpa: "7.90" },
  { semester: "Semester 6", sgpa: "7.92" },
  { semester: "Semester 7", sgpa: "Pending" },
  { semester: "Semester 8", sgpa: "Pending" },
];

export function ExperienceSection() {
  return (
    <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
      <div className="section-wrap">
        <div className="section-label"><span>05</span> / EXPERIENCE &amp; EDUCATION</div>
        <div className="experience-heading-row">
          <div>
            <span className="experience-kicker">THE JOURNEY SO FAR</span>
            <h2 id="experience-title">Learning by doing.<br /><span className="serif-accent">Building with intent.</span></h2>
          </div>
          <p className="experience-intro">My experience is currently centred on engineering education and hands-on projects. I share the work clearly rather than presenting project work as formal employment.</p>
        </div>

        <div className="experience-layout">
          <div className="experience-timeline" aria-label="Education and project experience timeline">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="experience-item" key={item.title}>
                  <div className="experience-marker"><Icon size={19} strokeWidth={1.6} /></div>
                  <div className="experience-item-content">
                    <div className="experience-item-meta"><span>{item.period}</span><span>{item.kind}</span></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
                    {item.education && item.kind === "UNDERGRADUATE" && (
                      <details className="semester-details">
                        <summary>View semester-wise SGPA</summary>
                        <div className="semester-grid">
                          {semesterResults.map(result => (
                            <div className="semester-result" key={result.semester}>
                              <span>{result.semester}</span>
                              <strong>{result.sgpa}</strong>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                  <span className="experience-index">0{index + 1}</span>
                </article>
              );
            })}
          </div>

          <aside className="experience-aside">
            <div className="experience-availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <BriefcaseBusiness size={24} strokeWidth={1.5} />
            <h3>Ready for the next challenge.</h3>
            <p>I'm interested in AI engineering internships, entry-level opportunities and well-scoped freelance projects where I can contribute, learn and ship useful software.</p>
            <a href="#contact">Let's connect <ArrowUpRight size={15} /></a>
            <span className="experience-aside-foot">INDIA · REMOTE-FRIENDLY</span>
          </aside>
        </div>
        <p className="experience-note">This section reflects my current education and project-based development. Formal employment and certifications will be added when applicable.</p>
      </div>
    </section>
  );
}
