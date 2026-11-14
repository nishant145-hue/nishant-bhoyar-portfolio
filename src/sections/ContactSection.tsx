import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";

const EMAIL = "nishantbhoyar4016@gmail.com";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const inquiry = String(data.get("inquiry") || "");
    const service = String(data.get("service") || "Not specified");
    const budget = String(data.get("budget") || "Not specified");
    const timeline = String(data.get("timeline") || "Not specified");
    const company = String(data.get("company") || "Not provided");
    const details = String(data.get("details") || "").trim();
    const subject = `${inquiry}: ${service}`;
    const body = [
      `Hello Nishant,`, "", "I'd like to discuss an opportunity.", "",
      `Name: ${name}`, `Email: ${email}`, `Company / Website: ${company}`,
      `Inquiry type: ${inquiry}`, `Service: ${service}`, `Budget: ${budget}`,
      `Preferred timeline: ${timeline}`, "", "Project / opportunity details:", details,
      "", "Sent from your portfolio contact form."
    ].join("\n");
    // Open Gmail's web compose window directly instead of relying on the
    // visitor having a desktop mail app configured for mailto: links.
    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", EMAIL);
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    const composeWindow = window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
    if (composeWindow) {
      setSubmitted(true);
    } else {
      // If the browser blocks the new tab, fall back to the user's mail handler.
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
    }
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-wrap contact-inner">
        <div className="section-label"><span>06</span> / LET'S CONNECT</div>
        <div className="contact-content">
          <div className="contact-copy">
            <h2>Have a problem<br />worth <span className="serif-accent">solving?</span></h2>
            <p>Tell me what you're working on. Whether you need an AI solution, a development partner, or are reaching out about a role, share a few details and I'll get back to you.</p>
            <div className="contact-direct"><Mail size={16} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            <div className="contact-links">
              <a href="https://github.com/nishant145-hue" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/in/nishant-bhoyar-2b7658346/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading"><div><span className="contact-kicker">PROJECT / OPPORTUNITY INQUIRY</span><h3>Let's start with the basics.</h3></div><span className="form-step">01 / 01</span></div>
            <div className="form-grid">
              <label>Your name <span>*</span><input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required /></label>
              <label>Email address <span>*</span><input name="email" type="email" placeholder="jane@company.com" autoComplete="email" required /></label>
              <label>Company / website <small>Optional</small><input name="company" type="text" placeholder="Company name or URL" /></label>
              <label>I'm reaching out about <span>*</span><select name="inquiry" defaultValue="Freelance project" required><option>Freelance project</option><option>AI / software development</option><option>Internship opportunity</option><option>Full-time role</option><option>Collaboration</option><option>Something else</option></select></label>
              <label>Service you're interested in <select name="service" defaultValue="Not sure yet"><option>AI Chatbot Development</option><option>RAG Application Development</option><option>Agentic AI Development</option><option>AI Workflow Automation</option><option>Python Backend Development</option><option>AI MVP / Prototype</option><option>Not sure yet</option></select></label>
              <label>Estimated budget <select name="budget" defaultValue="Not decided yet"><option>Under $500</option><option>$500–$1,500</option><option>$1,500–$5,000</option><option>$5,000+</option><option>Not decided yet</option><option>Not applicable / job inquiry</option></select></label>
              <label>Preferred timeline <select name="timeline" defaultValue="Flexible"><option>As soon as possible</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Flexible</option><option>Just exploring</option></select></label>
              <label className="form-full">Tell me about your project or opportunity <span>*</span><textarea name="details" rows={5} placeholder="What are you trying to build or solve? Include goals, key features, or any useful context..." required minLength={20} /></label>
            </div>
            <div className="form-submit-row"><p>I'll review the details and reply by email.</p><button type="submit">Send inquiry <Send size={15} /></button></div>
            {submitted && <p className="form-feedback" role="status">Gmail should open in a new tab with your inquiry pre-filled. Review the message and press Send in Gmail. If no tab opens, allow pop-ups for this site or email me directly using the address on this page.</p>}
            <p className="form-privacy">Your details are used only to respond to this inquiry. Please don't include passwords or sensitive personal information.</p>
          </form>
        </div>
        <div className="contact-bottom"><span>NISHANT BHOYAR © 2026</span><span>DESIGNED & BUILT WITH CURIOSITY</span><a href="#home">BACK TO TOP ↑</a></div>
      </div>
    </section>
  );
}
